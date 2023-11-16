import { Component, OnInit } from '@angular/core';

import { ApiPaisesService } from '../services/api-paises.service';


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit{

  termoPesquisa: string = '';
  continentes: string[] = ['Africa','America','Asia','Europe','Oceania','Continents']
  idC: string = ''

  constructor(private apiPaisesService: ApiPaisesService,) {}


  ngOnInit(): void {
    this.realizarPesquisa(this.termoPesquisa);

  }

  realizarPesquisa(nome:string) {

  }

  optionSelec(index:number){
    let id = this.continentes[index]
    this.idC = id
    console.log("index:", this.idC)
  }

}
