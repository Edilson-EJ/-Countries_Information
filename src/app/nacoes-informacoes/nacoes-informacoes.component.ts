import { ApiPaisesService } from './../services/api-paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nacoes-informacoes',
  templateUrl: './nacoes-informacoes.component.html',
  styleUrls: ['./nacoes-informacoes.component.css']
})
export class NacoesInformacoesComponent implements OnInit{

  dadosDaAPIAle: any[] = [];
  dadosDaAPIUS: any[] = [];
  dadosDaAPIBR: any[] = [];
  dadosDaAPIRUSS: any[] = [];
  dadosDaAPICH: any[] = [];
  dadosDaAPIIN: any[] = [];

  dadosDaAPITD: any[] = [];

  dadosDaAPIRG: any[] = [];

  constructor(private apiPaisesService: ApiPaisesService) {}

  ngOnInit(): void {

    //DADOS DOS PAÍSES
    this.mostraDadosAle();
    this.mostraDadosUS();
    this.mostraDadosBR();
    this.mostraDadosRUSS();
    this.mostraDadosCH();
    this.mostraDadosIN();
    //TODOS OS PAÍSES
    this.mostraDadosTD();
    //PA[ISES POR REGIÃO
    this.mostraDadosRG();
  }

  mostraDadosAle(){
    this.apiPaisesService.getDadosDaAPIAle().subscribe( data =>{
      this.dadosDaAPIAle = data;
      console.log(this.dadosDaAPIAle)
    })
  }

  mostraDadosUS(){
    this.apiPaisesService.getDadosDaAPIUS().subscribe( data =>{
      this.dadosDaAPIUS = data;
      console.log(this.dadosDaAPIUS)
    })
  }

  mostraDadosBR(){
    this.apiPaisesService.getDadosDaAPIBR().subscribe( data =>{
      this.dadosDaAPIBR = data;
      console.log(this.dadosDaAPIBR)
    })
  }

  mostraDadosRUSS(){
    this.apiPaisesService.getDadosDaAPIRUSS().subscribe( data =>{
      this.dadosDaAPIRUSS = data;
      console.log(this.dadosDaAPIRUSS)
    })
  }

  mostraDadosCH(){
    this.apiPaisesService.getDadosDaAPICH().subscribe( data =>{
      this.dadosDaAPICH = data;
      console.log(this.dadosDaAPICH)
    })
  }

  mostraDadosIN(){
    this.apiPaisesService.getDadosDaAPIIN().subscribe( data =>{
      this.dadosDaAPIIN = data;
      console.log(this.dadosDaAPIIN)
    })
  }

  mostraDadosTD(){
    this.apiPaisesService.getDadosDaAPITD().subscribe( data =>{
      this.dadosDaAPITD = data;
      console.log(this.dadosDaAPITD)
    })
  }

  mostraDadosRG(){
    this.apiPaisesService.getDadosDaAPIRG().subscribe( data =>{
      this.dadosDaAPIRG = data;
      console.log(this.dadosDaAPIRG)
    })
  }

}
