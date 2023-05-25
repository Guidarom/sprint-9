import { Component,HostListener } from '@angular/core';
import { AccountService, } from '../../_services/account.service';
import { RecipesService } from '../../_services/recipes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  child:boolean=false
  selectedOption: string= ''

  
  constructor(private accountService:AccountService,private recipesService:RecipesService){}

  
  get isLogged(){
    return this.accountService.isLogged
  }

  loginOut(){
    console.log('logingout works');
    this.accountService.logout();
    this.accountService.loginOut();
    this.showPanel()
  }

  showPanel(){
    this.child = !this.child;
    
  }
  selectOption(option: string) {
    this.recipesService.typeRecipe = option
    this.recipesService.selectedRecipes()
    .subscribe(data=>{
      this.recipesService.recipesList=data
    })
    
  }
  selectDown(option:string){
    this.selectOption(option);
    this.child = !this.child
  }


}
