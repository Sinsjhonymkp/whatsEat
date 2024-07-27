import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse, IRecipe } from '../../interfaces/recipeInterface';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  http = inject(HttpClient);
  private appId: string = 'd844f934'
  private appKey: string = 'e94396a018c9ad582d1e5e49557851ee';

  getRecipes(ingredients: string): Observable<IRecipe[]>{
    const apiUrl = `https://api.edamam.com/search?q=${encodeURIComponent(ingredients)}&app_id=${this.appId}&app_key=${this.appKey}`;
    return this.http.get<ApiResponse>(apiUrl).pipe(
      map(response => response.hits.map(hit => hit.recipe))
    );
  }
}
