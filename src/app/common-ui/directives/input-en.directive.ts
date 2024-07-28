import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputEn]',
  standalone: true
})
export class InputEnDirective {

@HostListener('input', ['$event']) onInput(event: any) {
  const input = event.target.value;
  const regex = /^[a-zA-Z\s]*$/;
  const isValid = regex.test(input);
  if (!isValid) {
    event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
  }

}

}
