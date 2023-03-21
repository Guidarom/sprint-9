import { Component, OnInit } from '@angular/core';
import { FavsService } from '../../../_services/favs.service';
import { RecipesService } from '../../../_services/recipes.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  get favList(){
    return this.favsService.favsList
  }
  set favList(value){
    this.favsService.favsList =value
  }
  public realFavList:any[]=[]
  private recipesList:any

  constructor(private favsService:FavsService,
              private recipesService:RecipesService){}


  ngOnInit(): void {
    this.getRecipesList()
    
    
  }
  getRecipesList(){
    this.recipesService.getRecipesList()
    .subscribe((data) => {
      this.recipesList=data
      this.realFavList=this.recipesList.filter((data:any)=> this.favList.includes(data.id))
      
       // Aquí puedes trabajar con los datos obtenidos
    }); 
  }
}
