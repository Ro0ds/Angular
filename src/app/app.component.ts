import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular001';
  
  nome:string = 'Rodrigo';
  userData = {
    email: 'rodgabrielsilva@icloud.com',
    funcao: 'Analista de Suporte',
  };
}