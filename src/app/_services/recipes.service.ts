import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { HttpClient} from '@angular/common/http';
/* import  recipesJson from '../../assets/recipes.json' */
import { Recipe } from '../_models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor ( private http:HttpClient) { 
  }

  public typeRecipe:string = ''
  public recipesList:any;
  public recipeCard:any;
  private recipesUrl = 'http://localhost:8000/api/recetas';
  private jsonRecipes = 'assets/recipes.json'
  //private recipesUrl =  `https://starpi.herokuapp.com/starpi/starships`
  private urlApiNico= 'http://localhost:3000/api/recipes'


  getRecipes(){
    // los observables no funcionan
    return this.http.get('https://starpi.herokuapp.com/starpi/starships')
    
  }



  getRecipesList(){
    return this.http.get<Recipe[]>('assets/recipes.json')
 
  } 
/*   getSelectedRecipes(){
    const recipes = this.http.get<Recipe[]>('assets/recipes.json')
    if(this.typeRecipe!==''){
      return this.recipesList = this.recipes.filter((receta:any) => receta.tipoComida.includes(this.typeRecipe));
    }
    if(this.typeRecipe === ''){
      return this.recipesList = recipes
    }
  } */

  selectedRecipes() {
    return this.http.get<Recipe[]>('assets/recipes.json').pipe(
      map((recipes: Recipe[]) => {
        if (this.typeRecipe !== '') {
          return recipes.filter((receta: Recipe) => receta.tipoComida && receta.tipoComida.includes(this.typeRecipe));
        } else {
          return recipes;
        }
      })
    );
  }
  

/*    getRecipesList(): Observable<Recipe[]> {
    return this.http.get<{ recetas: Recipe[] }>(this.recipesUrl).pipe(
      map(response => response.recetas)
    );
  }  */

  
  getRecipeCard(id:number){
    this.recipesList= this.http.get(this.recipesUrl);
}



}
