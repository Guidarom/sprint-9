import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../_services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private servicio:RecipesService){}

  ngOnInit(): void {
  /*   this.servicio.getRecetas() */
  }
  
}
