import { Component, } from '@angular/core';
import { FreezerDirectiveDirective } from '../../common-ui/directives/freezer-directive.directive';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-freezer',
  standalone: true,
  imports: [FreezerDirectiveDirective],
  templateUrl: './freezer.component.html',
  styleUrl: './freezer.component.scss'
})
export class FreezerComponent {
  
constructor ( ){
}
}
