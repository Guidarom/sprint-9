import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  favsList:number[]=[];
  constructor() { }

  saveFavs(id:number){
    this.favsList.push(id)
    console.log(this.favsList)
  }
  deleteFavorites(){
    console.log('delete works')
  }



}
