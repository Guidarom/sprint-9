import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor() { }
  isLogged:boolean=false
  
  usersList:User[]=[]
  redirectUrl:any =''

  loginOut(){
    this.isLogged=false
    console.log('deu siau')
  }
  logginTrue(){
    this.isLogged=true
  }

  saveToLocalStorage(list: User[]) {
    localStorage.setItem('list', JSON.stringify(list))
    console.log(localStorage)
  }

  getListFromLocalStorage(key: string) {
    if (!localStorage.getItem(key)) {
      return;
    }
    this.usersList=JSON.parse(localStorage.getItem(key)!)
  }

}

