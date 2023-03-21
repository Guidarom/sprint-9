import { Component, OnInit } from '@angular/core';
import { FavsService } from '../../_services/favs.service';
import { RecipesService } from '../../_services/recipes.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{

  get favList(){
    return this.favsService.favsList
  }
  private realFavList:any[]=[]

  constructor(private favsService:FavsService,
              private recipesService:RecipesService){}


  ngOnInit(): void {
    this.recipesService.getRecipesList()
    
    
  }

  


}
