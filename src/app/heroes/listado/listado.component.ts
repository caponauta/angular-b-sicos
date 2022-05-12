import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Goku','Capitán América','Chapulín Colorado','Gohan'];
  heroeBorrado: string = '';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

