import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../_services/account.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  signupForm:FormGroup;



  constructor(
    private router: Router,
    private builder:FormBuilder,
    private accountService:AccountService,
    private activateRoute:ActivatedRoute
  ){
    this.signupForm=this.builder.group({
      nombre:[''],
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.compose([Validators.minLength(6),Validators.required],)]
    })

  }

  get usersList(){
    return this.accountService.usersList

  }
  get redirectUrl(){
    return this.accountService.redirectUrl
  }
  set redirectUrl(value:any){
    this.accountService.redirectUrl = value
  }
  required( field : string){
    return this.signupForm.controls[field].errors && this.signupForm.controls[field].touched
    }

  send(){
    console.log('send works')
      const newUser: User={
        //id: this.usersList.length +1,
        nombre: this.signupForm.value.nombre,
        email:this.signupForm.value.email,
        password:this.signupForm.value.password
      }

      if(this.signupForm.valid){
        console.log(newUser)
        this.accountService.register(newUser).subscribe({
          
          next: (response) => {
            console.log('Usuario agregado:', response);
          },
          error: (error) => {
            console.error('Error al agregar usuario:', error);
          },

      });

        console.log('register works')

        


      // Esiguiente codigo funciona con local storage
       /*  this.usersList.push(newUser),
        this.accountService.logginTrue(),
        this.accountService.saveToLocalStorage(this.usersList),  
        this.router.navigateByUrl(this.redirectUrl) */


        
      }
      
      this.signupForm.markAllAsTouched();
    }
  }

