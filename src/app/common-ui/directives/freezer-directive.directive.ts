import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFreezerDirective]',
  standalone: true
})

export class FreezerDirectiveDirective {
 
@HostBinding('style.background') color: string ='';
@HostBinding('style.gap') gap: string = "";
@HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent): void {
  this.color = '#545df9';
  this.gap = '400px';
  
}


}
