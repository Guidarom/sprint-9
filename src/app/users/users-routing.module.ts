import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  {
    path: '', component: LayoutComponent,
    children: [
        { path: '', component: ListComponent },
      
    ]
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
