import { Component, inject } from '@angular/core';
import { FridgeComponent } from '../../pages/fridge/fridge.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FoodFairbaseService } from '../../services/food-fairbase.service';
import { InputEnDirective } from '../../common-ui/directives/input-en.directive';

@Component({
  selector: 'food-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputEnDirective],
  templateUrl: './add-food-form.component.html',
  styleUrl: './add-food-form.component.scss'
})
export class AddFoodFormComponent {
  popupSignal = inject(FridgeComponent)
  foodServise = inject(FoodFairbaseService)
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
  })
 
  onSubmit() {
    if (this.form.valid) {
    const { name, count } = this.form.value
    this.foodServise.addFood(name).subscribe({ 
      next : () => { (console.log("Успешно")) },
      error: (err) => { (console.log("error", err.code))}
     });
    this.togglePopup()
  }
  else {
    alert('заполните все поля')
  }

  }

  togglePopup() {
    this.popupSignal.togglePopup()
  }

}
