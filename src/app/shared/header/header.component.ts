import { Component } from '@angular/core';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private accountService:AccountService){}

  
  get isLogged(){
    return this.accountService.isLogged
  }

  loginOut(){
    console.log('logingout works')
   // return this.userService.loginOut()
  }

}
