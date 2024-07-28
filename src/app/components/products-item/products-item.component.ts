import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'addingProducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-item.component.html',
  styleUrl: './products-item.component.scss'
})
export class ProductsItemComponent {
@Input()item!: string;
@ViewChild('basketFood', { static: false }) basketFood!: ElementRef;

findFoodInBasket(): string{
 return this.basketFood.nativeElement.innerText;
}


}

