import { Injectable } from '@angular/core';
import { User } from '../_models/user';

/* import { environment } from 'src/environments/environment'; */
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private router: Router, 
    private http  : HttpClient ) { }

  isLogged:boolean=false
  
  usersList:User[]=[]
  redirectUrl:any =''
  private apiUserUrl='http://localhost:8000'
  private usersUrl= 'http://localhost:8000/api/usuarios?desde=0'

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

   register(user: User) {
        return this.http.post(`${this.apiUserUrl}/api/usuarios`, user);
    }

  getAll(): Observable <User[]> {
    return this.http.get<any>(this.usersUrl).pipe(
      map(response => response.usuarios)
    );
  } 

}

