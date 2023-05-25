import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../../_services/account.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private accountService:AccountService,
    private router:Router,
    private route: ActivatedRoute
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (!this.accountService.isLogged){
        this.router.navigate(['account/login'],{ queryParams: { redirectUrl: state.url }})
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes estar registrado para poder acceder a este espacio',
          showConfirmButton: false,
          timer: 4000,
        })
        return false
      }

    return true;
  }
  
}
