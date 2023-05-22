import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../_services/recipes.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/_models/recipe';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{

  public loading:boolean =false;
  public selectedRecipes: any;


  constructor(private recipesService:RecipesService, private http:HttpClient){}

  get typeRecipe(){
    return this.recipesService.typeRecipe
  }


  get recipesList(){
    return this.recipesService.recipesList
  }
  set recipesList(value){
    this.recipesService.recipesList=value
  }

  ngOnInit(): void {
    this.selectOption(this.typeRecipe)
    
    
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

      
      if(this.typeRecipe!==''){
        this.selectedRecipes = this.recipesList.filter((receta:any) => receta.tipoComida.includes(this.typeRecipe));
      }
      if(this.typeRecipe === ''){
        this.selectedRecipes = this.recipesList
      }
      
      
      if(data){
        this.loading=true
      }     
       // Aquí puedes trabajar con los datos obtenidos
    });    
 // Aquí puedes trabajar con los datos obtenidos
  }

  selectOption(option: string) {
    this.recipesService.typeRecipe = option
    this.recipesService.selectedRecipes()
    .subscribe(data=>{
      this.recipesList=data
      if(data){
        this.loading=true
      }  
    })
    
  }
  



}
