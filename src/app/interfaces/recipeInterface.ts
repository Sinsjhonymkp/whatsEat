export interface IDigest {
    label: string;
    tag: string;
    schemaOrgTag: string | null;
    total: number;
    hasRDI: boolean;
    daily?: number;
    unit: string;
  }
  
  export interface IRecipe {
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    calories: number;
    totalWeight: number;
    totalTime: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    digest: IDigest[];
  }
  
  interface IHit {
    recipe: IRecipe;
  }
  
  export interface ApiResponse {
    hits: IHit[];
    // другие поля, если необходимо
  }