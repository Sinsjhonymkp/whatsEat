import { Component } from '@angular/core';
import { LayoutComponent } from "../../common-ui/layout/layout.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import  translate from 'translate'
import { FreezerComponent } from "../../components/freezer/freezer.component";
import { PrductuctsStockComponent } from "../../components/prductucts-stock/prductucts-stock.component";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet, FreezerComponent, PrductuctsStockComponent, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

async translatedText(){
  const text: string | null  = prompt("Введите текст для перевода:");
  if (text) {
    try {
      const res = await translate(text, { to: 'ru' });
      console.log(res); // Должно вывести: "Привет, мир"
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log('No text provided for translation.');
  }
}
}