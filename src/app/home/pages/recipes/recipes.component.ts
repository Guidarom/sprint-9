import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../_services/recipes.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{

  public loading:boolean =false;

  constructor(private recipesService:RecipesService, private http:HttpClient){}

  get recipesList(){
    return this.recipesService.recipesList
  }
  set recipesList(value){
    this.recipesService.recipesList=value
  }

  ngOnInit(): void {

    this.getRecipesList()
    
    
  }


  /* El siguiente codigo es una funcion con observable que solo funcionara si añadimos interfaz */
  getRecipes(){
    console.log('recipes works')
    this.recipesService.getRecipes()
      .subscribe(resp => {
        console.log(resp)
      
    })   
    

  }

  getRecipesList(){
    this.recipesService.getRecipesList()
    .subscribe(data => {
      this.recipesList=data
      if(data){
        this.loading=true
      }
       // Aquí puedes trabajar con los datos obtenidos
    }); 
    
    
 // Aquí puedes trabajar con los datos obtenidos
    
  }



}
