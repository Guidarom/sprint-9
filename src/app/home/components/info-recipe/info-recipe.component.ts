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
  public estadoRecipe!:string

  /*  */id: number= 0

/*  get recipesList(){
    return this.recipesService.recipesList
  }
 */
  constructor(private recipesService:RecipesService,
              private favsService:FavsService,
              private activatedRoute: ActivatedRoute, ){}

  get favsList(){
    return this.favsService.favsList
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      const param=params.get('id');
      this.id= Number(param)
      this.getRecipe();
      const index = this.favsList.findIndex(e=> this.id===e)
      if(index === -1){
        this.estadoRecipe='Guardar'
      }
      else{
        this.estadoRecipe='Guardado'
      }
      
    })
  }
  getRecipe(){
    this.recipesService.getRecipesList()
     .subscribe(data => {
      this.recipesList = data
      this.currentRecipe = this.recipesList.find((e:any)=>e.id===this.id)
      
    }); 
  }


changeState(){
  console.log('changeState works')
  const index = this.favsList.findIndex(e=> this.id===e)
  if(index === -1){
    this.saveFavorites()
  }
  else{
    this.removeFromFavs(index)
  }
}

  saveFavorites(){
    this.favsService.saveFavs(this.id);
    this.estadoRecipe='Guardado'
  }

  removeFromFavs(index:number){
    //const index = this.favsList.findIndex(e=> id===e) 
    this.favsService.removeFromFavs(index);
    this.estadoRecipe='Guardar'
  }

}
