import { Component, OnInit } from '@angular/core';
import { FavsService } from '../../../_services/favs.service';
import { RecipesService } from '../../../_services/recipes.service';
import { Recipe } from '../../../_models/recipe';
import { Subject } from 'rxjs';

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
  public currentFavList:Recipe[]=[]
  public printFavList:Subject<Recipe[]> = new Subject()
  private recipesList:Recipe[]=[]
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
      console.log(data)
     
      // this.realFavList = this.recipesList.filter((data:any)=> this.favList.includes(data.id))
      this.printFavList.subscribe(array => {      
        this.currentFavList = array
      console.log(array)})
      this.printFavList.next(this.recipesList.filter(data=> this.favList.includes(data.id)))
      this.progress=this.favList.length
      this.currentFavList.forEach(e => e.isFav = true);
      // console.log(this.realFavList);
      
       // Aquí puedes trabajar con los datos obtenidos
    }); 

  }

  

  changeFavs(i:number) {
    if(this.currentFavList[i].isFav){
      this.favsService.removeFromFavs(this.currentFavList[i].id)
      
    }
    if(!this.currentFavList[i].isFav){
      this.favsService.saveFavs(this.currentFavList[i].id)
      
    }
    this.progress = this.favList.length
    this.percentage = (this.progress / this.total) * 100;

    this.currentFavList[i].isFav = !this.currentFavList[i].isFav
  }
}

