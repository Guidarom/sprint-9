import { Component, OnInit } from '@angular/core';
import { FavsService } from '../../../_services/favs.service';
import { RecipesService } from '../../../_services/recipes.service';
import { Recipe } from '../../../_models/recipe';

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
  public realFavList:Recipe[]=[]
  private recipesList:any
  public isFill:boolean=true
  progress = this.favList.length;
  total = 30;
  percentage = (this.progress / this.total) * 100;

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
      this.progress=this.favList.length
      this.realFavList.forEach(e => e.isFav = true);
       // Aquí puedes trabajar con los datos obtenidos
    }); 
  }

  toggleIcon(i:number) {
    if(this.realFavList[i].isFav){
      this.favsService.removeFromFavs(this.realFavList[i].id)
      
    }
    if(!this.realFavList[i].isFav){
      this.favsService.saveFavs(this.realFavList[i].id)
      
    }
    this.progress=this.favList.length
    this.percentage = (this.progress / this.total) * 100;

    this.realFavList[i].isFav = !this.realFavList[i].isFav
  }
}

