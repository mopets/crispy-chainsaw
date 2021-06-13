import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
            <h1>{{title}} {{titu}}</h1>
            <button (click)=" acumular(1)"> +{{base}}</button>
            <span> {{numero}} <span>
            <button (click) = "acumular(0)"> - {{base}}</button>`
})

export class ContadorComponent{

    title = 'Contador APP';
  titu = 'Muy bien'
  numero: number = 10;
  base: number = 5;
  
  sumar(){
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }

  acumular(valor: number){
    if(valor)
      this.numero += 5;
     else
      this.numero -= 5; 
  }

  //base 5

}