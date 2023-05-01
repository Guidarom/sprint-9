import { Injectable } from '@angular/core';
import { User } from '../_models/user';

/* import { environment } from 'src/environments/environment'; */
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private router: Router, 
    private http  : HttpClient ) {  
      this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user = this.userSubject.asObservable(); }

  isLogged:boolean=false

  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  
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

    login(email: string, password: string) {
      return this.http.post<User>(`${this.apiUserUrl}/api/auth/login`, { email, password })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
              this.userSubject.next(user);
              console.log('usuario logeado')
              return user;
          }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
}

    delete(id: number) {
      return this.http.delete(`${this.apiUserUrl}/api/usuarios/${id}`)
    }

  getAll(): Observable <User[]> {
    return this.http.get<any>(this.usersUrl).pipe(
      map(response => response.usuarios)
    );
  } 

}

