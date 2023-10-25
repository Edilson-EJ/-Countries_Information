import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit{

  termoPesquisa: string = '';
  continentes: string[] = ['Africa','America','Asia','Europe','Oceania','Continents']
  idC: string = ''

  @Output() pesquisaRealizada = new EventEmitter<string>();

  ngOnInit(): void {
    this.realizarPesquisa();

  }

  realizarPesquisa() {
    this.pesquisaRealizada.emit(this.termoPesquisa);
    console.log(this.termoPesquisa)
  }

  optionSelec(index:number){
    let id = this.continentes[index]
    this.idC = id
    console.log("index:", this.idC)
  }

}
