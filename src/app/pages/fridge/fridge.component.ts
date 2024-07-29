import { Component,  ElementRef, inject, signal, ViewChild } from '@angular/core';
import { PrductuctsStockComponent } from "../../components/prductucts-stock/prductucts-stock.component";
import { FoodFairbaseService } from '../../services/food-fairbase.service';
import {  map, Observable, tap } from 'rxjs';
import { IFood } from '../../interfaces/foodInterface';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AddFoodFormComponent } from "../../components/add-food-form/add-food-form.component";
import { ProductsItemComponent } from "../../components/products-item/products-item.component";
import { ApiServiceService } from '../../services/api/api-servise.service';
import { IRecipe } from '../../interfaces/recipeInterface';
import { RecipeComponent } from "../../components/recipe/recipe.component";
import { SvgIconComponent } from '../../common-ui/svg-icon/svg-icon.component';


@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [PrductuctsStockComponent, SvgIconComponent, AsyncPipe, AddFoodFormComponent, ProductsItemComponent, CommonModule, RecipeComponent],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.scss'
})
export class FridgeComponent {
  private apiServise = inject(ApiServiceService);
  private foodService = inject(FoodFairbaseService);
  protected foodSignal: IFood[] = [];
  public popupSignal = signal<boolean>(false);
  protected recipies$!: Observable<IRecipe[]>;
  public name:string[] = [];
  public products$!: Observable<IFood[]>; // Объявляем Observable
  buttonShowRecipe: boolean = false;
  productsItem = new ProductsItemComponent();
  @ViewChild('basketFood', { static: false }) basketFood!: ElementRef;

  addFoodInBasket(name: string) {
    this.name.push(name);
    console.log(this.name);
    this.showRecipeActive();
  }

ngOnInit() {
  this.products$ = this.foodService.getFood().pipe(
    tap (res => this.foodSignal = res)
  )

}

async showRecipes(){
  const inputFood:string = this.name.join(" ");
  this.recipies$ = this.apiServise.getRecipes(inputFood);
  this.recipies$.subscribe(res => {console.log(res)});
}

removeFood(id:string){
  this.foodService.deleteFood(id);
}

togglePopup() {
  this.popupSignal.set(!this.popupSignal());
}

removeFoodfromBasket(item: string) {
  this.name = this.name.filter(name => name !== item);
  this.showRecipeActive();
  console.log(this.name);
}

showRecipeActive(){
  if(this.name.length === 0){
    this.buttonShowRecipe = false;
    console.log(this.buttonShowRecipe);
  } else {
    this.buttonShowRecipe = true;
    console.log(this.buttonShowRecipe);
  }
  
}

}