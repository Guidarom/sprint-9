import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { InfoRecipeComponent } from './components/info-recipe/info-recipe.component';
import { FavoritesComponent } from './components/favorites/favorites.component';






@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    RecipesComponent,
    InfoRecipeComponent,
  FavoritesComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }
