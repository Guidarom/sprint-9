import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthGuard } from './auth/auth.guard';  ...lo utilizare luego
import { HomeComponent } from './home/pages/home/home.component';

const routes: Routes = [
  {path:'account',loadChildren:() => import('./account/account.module').then (m =>m.AccountModule)},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
