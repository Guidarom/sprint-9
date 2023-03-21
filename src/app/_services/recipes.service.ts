import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
/* import  recipesJson from '../../assets/recipes.json' */



@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor ( private http:HttpClient) { 

  }

  public recipesList:any;
  public recipeCard:any;
  //private recipesUrl = 'localhost:3000/api/recipes';
  private recipesUrl =  `https://starpi.herokuapp.com/starpi/starships`


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
            this.recipesList = data;
           console.log(this.recipesList)
          });
  }

  getRecipesList(){
   
    return this.http.get('assets/recipes.json')
    //this.recipesList = this.http.get('assets/recipes.json')
    //console.log(this.recipesList)
    
  }
  getRecipeCard(id:number){
    this.recipesList= this.http.get('assets/recipes.json');
    
    

  
    
   

}


}
