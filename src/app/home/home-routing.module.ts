import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { InfoRecipeComponent } from './components/info-recipe/info-recipe.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AuthGuard } from '../_helpers/guards/auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'recipes',component:RecipesComponent},
  {path:'favorites',component:FavoritesComponent,canActivate:[AuthGuard]},
  {path:'info-recipe/:id',component:InfoRecipeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
