import { Component, Input } from '@angular/core';
import { IFood } from '../../interfaces/foodInterface';
import { SvgIconComponent } from '../../common-ui/svg-icon/svg-icon.component';


@Component({
  selector: 'stock',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './prductucts-stock.component.html',
  styleUrl: './prductucts-stock.component.scss'
})
export class PrductuctsStockComponent {
@Input() product!: IFood;



  
}
