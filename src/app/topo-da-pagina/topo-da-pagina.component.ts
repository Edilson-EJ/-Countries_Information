import { Component } from '@angular/core';

@Component({
  selector: 'app-topo-da-pagina',
  templateUrl: './topo-da-pagina.component.html',
  styleUrls: ['./topo-da-pagina.component.css']
})
export class TopoDaPaginaComponent {

  imageLua: string = ''

  constructor(){
    this.imageLua = '/Site-Sobre-Paises/src/assets/lua.png'
  }

  onButtonClick() {
    console.log('Botão clicado!');
    // Adicione a lógica desejada quando o botão for clicado
  }


}
