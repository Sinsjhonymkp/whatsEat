import { Component, Input } from '@angular/core';
import { IDigest, IRecipe } from '../../interfaces/recipeInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
@Input() recipe!: IRecipe;
}
