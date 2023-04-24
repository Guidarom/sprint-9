import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { first, map } from 'rxjs';
import { User } from 'src/app/_models/user';

interface usersData {
  total?    :  number;
  usuarios? :  any[];
  

}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  users?: User[];
  
  constructor(private accountService:AccountService){}

  ngOnInit(): void {
    this.accountService .getAll().subscribe(users => {
      this.users = users;
    });
            
    
  }

  deleteUser(){
   
    console.log(this.users)
  }

}
