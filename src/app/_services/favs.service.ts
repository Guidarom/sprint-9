import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  favsList:number[]=[];
  constructor() { }

  saveFavs(id:number){
    if (!this.favsList.includes(id)){
      this.favsList.push(id)
      console.log(this.favsList)
    }
    
  }
  removeFromFavs(id:number){
    this.favsList.splice(id,1)
    console.log(this.favsList)
  }



}
