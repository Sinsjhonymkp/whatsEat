import { Component, inject, signal } from '@angular/core';
import { PrductuctsStockComponent } from "../../components/prductucts-stock/prductucts-stock.component";
import { FoodFairbaseService } from '../../services/food-fairbase.service';
import { map, Observable, tap } from 'rxjs';
import { IFood } from '../../interfaces/foodInterface';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AddFoodFormComponent } from "../../components/add-food-form/add-food-form.component";
import { ProductsItemComponent } from "../../components/products-item/products-item.component";
import { ApiServiceService } from '../../services/api/api-servise.service';
import { IRecipe } from '../../interfaces/recipeInterface';
import { RecipeComponent } from "../../components/recipe/recipe.component";


@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [PrductuctsStockComponent, AsyncPipe, AddFoodFormComponent, ProductsItemComponent, CommonModule, RecipeComponent],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.scss'
})
export class FridgeComponent {
  private apiServise = inject(ApiServiceService)
  private foodService = inject(FoodFairbaseService)
  protected foodSignal: IFood[] = [];
  public popupSignal = signal<boolean>(false);
 
  protected recipies$!: Observable<IRecipe[]>;
  
  public name:string[] = [];


  public products$!: Observable<IFood[]>; // Объявляем Observable

  handleClick(name: string) {
    this.name.push(name);
    console.log(this.name);
  }

ngOnInit() {
  this.products$ = this.foodService.getFood().pipe(
    tap (res => this.foodSignal = res)
  )

}

async showRecipes(){
  const inputFood:string = this.name.join(" ");
  this.recipies$ = this.apiServise.getRecipes(inputFood)
  this.recipies$.subscribe(res => {console.log(res)})
}

togglePopup() {
  this.popupSignal.set(!this.popupSignal())
}

trackByRecipe(index: number, recipe: IRecipe): string {
  return recipe.label; // Или другой уникальный идентификатор
}

}
