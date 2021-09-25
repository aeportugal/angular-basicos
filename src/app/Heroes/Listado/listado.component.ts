import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent{
  public heroes: string[] = ['Spiderman','Ironman','Capitán América','Thor','Hulk'];
  public nombreHeroeBorrado: string = '';

  public borrarHeroe(): void{
    this.nombreHeroeBorrado = this.heroes.pop() || '';
  }
}
