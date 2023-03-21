import { Component } from '@angular/core';
//import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint-9';
}
// el siguiente codigo no funciona para añadir fondo
/* backgroundImage = 'url(' + this.sanitizer.bypassSecurityTrustUrl('../assets/resumen-superficie-texturas-muro-piedra-hormigon-blanco.jpg') + ')';
constructor(private sanitizer: DomSanitizer) {} */
