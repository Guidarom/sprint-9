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


  getRecetas(){
    console.log('get recetas works')
      const apiUrl = 'https://starpi.herokuapp.com/starpi'
            fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
            this.recipesList = data
            console.log(this.recipesList)
          });
  }

  getRecipesList(){
    return this.http.get<Recipe[]>('assets/recipes.json')
 
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
