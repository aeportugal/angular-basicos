import { Component } from '@angular/core';

@Component(
{
    selector: 'app-contador',
    template: `
                <h1>{{titulo}}</h1>
                <h3>El valor base es: {{base}}</h3>
                <button (click)="acumular(+1)">+ {{base}}</button>
                <span> {{numero}} </span>
                <button (click)="acumular(-1)">- {{base}}</button>
            `
})

export class ContadorComponent
{
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
  
    acumular(valor: number){
      const valorBase = this.base * valor;
      this.numero += valorBase;}
      
}