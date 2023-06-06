import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
import { first } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm:FormGroup;
  error           = '';
  submitted = false;
 // private redirectUrl:any ='';

  get redirectUrl(){
    return this.accountService.redirectUrl
  }

  set redirectUrl(value:any){
    this.accountService.redirectUrl =value
  }

  constructor(
    private router: Router,
    private builder:FormBuilder,
    private accountService:AccountService,
    private  activatedRoute :ActivatedRoute
  ){
    this.signInForm=this.builder.group({
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.compose([Validators.minLength(6),Validators.required],)]
    })
  }
  required( field : string){
    return this.signInForm.controls[field].errors && this.signInForm.controls[field].touched
    }

  ngOnInit(): void {
    this.redirectUrl = this.activatedRoute.snapshot.queryParamMap.get('redirectUrl')||'';
    this.accountService.getListFromLocalStorage('list');
    
  }


  get usersList(){
    return this.accountService.usersList

  }
  get isLogged(){
    return this.accountService.isLogged
  }

  login(){
    this.submitted = true;

    let currentEmail = this.signInForm.value.email
    let currentPassword = this.signInForm.value.password

    if(!this.signInForm.valid){
      this.signInForm.markAllAsTouched() 
      return
    }

    if(this.signInForm.valid){
      this.accountService.login(currentEmail,currentPassword)
      .pipe(first())
      .subscribe({
          next: (resp) => {

              // get return url from route parameters or default to '/'
              const returnUrl = this.activatedRoute.snapshot.queryParams[''] || '/';
              this.router.navigate(['recipes']);
              this.accountService.logginTrue();
              console.log(resp)
              Swal.fire({
                icon: 'success',
                title: 'Bienvenido ',
                text: `${resp?.nombre}`,
                showConfirmButton: false,
                timer: 2500
               
              }) 
          },
          error: error => {
            //aqui cojemos el error para mostrar el mensaje en pantalla...no se si es correcto que este aqui el codigo
              Swal.fire({
              icon: 'error',
              title: 'Error...',
              text: 'El usuario y/o contraseña no es válido',
              showConfirmButton: false,
              timer: 4500,
            }) 
              this.error = error;
              
          }
          
      });
      
     

      /* const foundUser= this.usersList.find((e:any)=>currentUser.email ===e.email)
      foundUser?.password === currentUser.password? (alert(`Welcome ${foundUser?.nombre}`),
      (this.router.navigateByUrl(this.redirectUrl)),
      (this.accountService.logginTrue()))      
      : alert('try it again!') */
    }
    
    this.signInForm.markAllAsTouched()  
  }






}
