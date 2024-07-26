import { Component, inject, signal } from '@angular/core';
import { PrductuctsStockComponent } from "../../components/prductucts-stock/prductucts-stock.component";
import { FoodFairbaseService } from '../../services/food-fairbase.service';
import { Observable, tap } from 'rxjs';
import { IFood } from '../../interfaces/foodInterface';
import { AsyncPipe } from '@angular/common';
import { AddFoodFormComponent } from "../../components/add-food-form/add-food-form.component";
@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [PrductuctsStockComponent, AsyncPipe, AddFoodFormComponent],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.scss'
})
export class FridgeComponent {
  private foodService = inject(FoodFairbaseService)
  protected foodSignal: IFood[] = [];
  public popupSignal = signal<boolean>(false);

  public products$!: Observable<IFood[]>; // Объявляем Observable


ngOnInit() {
  this.products$ = this.foodService.getFood().pipe(
    tap (res => this.foodSignal = res)
  )
}

togglePopup() {
  this.popupSignal.set(!this.popupSignal())
}

}
