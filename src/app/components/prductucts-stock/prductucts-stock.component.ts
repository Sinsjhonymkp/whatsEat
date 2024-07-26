import { Component, Input } from '@angular/core';
import { IFood } from '../../interfaces/foodInterface';


@Component({
  selector: 'stock',
  standalone: true,
  imports: [],
  templateUrl: './prductucts-stock.component.html',
  styleUrl: './prductucts-stock.component.scss'
})
export class PrductuctsStockComponent {
@Input() product!: IFood;

handleClick(name: string) {
  console.log(name);
}
}
