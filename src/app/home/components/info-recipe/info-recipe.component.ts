import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../_services/recipes.service';
/* import { FavoritesService } from '../../../_services/favorites.service'; */
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map,find } from 'rxjs/operators';
import { FavsService } from '../../../_services/favs.service';

@Component({
  selector: 'app-info-recipe',
  templateUrl: './info-recipe.component.html',
  styleUrls: ['./info-recipe.component.css']
})
export class InfoRecipeComponent implements OnInit{

  public currentRecipe: any
  private recipesList:any
  /*  */id: number= 0

/*  get recipesList(){
    return this.recipesService.recipesList
  }
 */
  constructor(private recipesService:RecipesService,
              private favsService:FavsService,
              private activatedRoute: ActivatedRoute, ){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      const param=params.get('id');
      this.id= Number(param)
      this.getRecipe();
      
    })
  }
  getRecipe(){
    this.recipesService.getRecipesList()
     .subscribe(data => {
      this.recipesList = data
      this.currentRecipe = this.recipesList.find((e:any)=>e.id===this.id)
      console.log(this.currentRecipe)
    }); 
  }

  saveFavorites(){
    this.favsService.saveFavs(this.id)
    
  }







}
