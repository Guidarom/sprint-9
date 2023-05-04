import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
//import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint-9';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }


}
// el siguiente codigo no funciona para añadir fondo
/* backgroundImage = 'url(' + this.sanitizer.bypassSecurityTrustUrl('../assets/resumen-superficie-texturas-muro-piedra-hormigon-blanco.jpg') + ')';
constructor(private sanitizer: DomSanitizer) {} */
