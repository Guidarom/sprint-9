import { Component } from '@angular/core';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  child:boolean=false
  constructor(private accountService:AccountService){}

  
  get isLogged(){
    return this.accountService.isLogged
  }

  loginOut(){
    console.log('logingout works')
   // return this.userService.loginOut()
  }

  showPanel(){
    console.log('it works')
    this.child = !this.child;
  }

}
