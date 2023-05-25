import { Injectable } from '@angular/core';
import { AuthResponse, User } from '../_models/user';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl:string ='http//localhost:8000'

  constructor(
    private router: Router, 
    private http  : HttpClient ) {  
      this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user = this.userSubject.asObservable(); }

  public isLogged:boolean=false
  public adminSession: boolean = false;
 
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  
  usersList:User[]=[];
  redirectUrl:any ='';
 
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
        return this.http.post(`http://localhost:8000/api/usuarios`, user);
    }

    login(email: string, password: string) {

      const url = `http://localhost:8000/api/auth/login`;
      const body = { email, password };

      return this.http.post<AuthResponse>(url, body)
      
          .pipe(map(resp => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
             
              if(resp.usuario){
                localStorage.setItem('user', JSON.stringify(resp));
                localStorage.setItem('token', resp.token!);
                this.userSubject.next(resp.usuario);
                console.log('usuario logeado')
              }
              
              
              return resp.usuario;
          }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.adminSession = false;
    this.userSubject.next(null);
    this.router.navigate(['']);
    console.log('user deleted')
}

    delete(id: number) {
      const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' )
      return this.http.delete(`http://localhost:8000/api/usuarios/${id}`,{ headers })
    }

  getAll(): Observable <User[]> {
    
    return this.http.get<any>(this.usersUrl).pipe(
      map(response => response.usuarios)
      
    );
    
  } 

}

