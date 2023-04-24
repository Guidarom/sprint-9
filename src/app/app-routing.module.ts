import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthGuard } from './auth/auth.guard';  ...lo utilizare luego
import { HomeComponent } from './home/pages/home/home.component';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {path:'account',loadChildren:() => import('./account/account.module').then (m =>m.AccountModule)},
  {path:'',loadChildren:() => import('./home/home.module').then (m =>m.HomeModule)},
  {path:'users',loadChildren:() => import('./users/users.module').then (m =>UsersModule)},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
