import { Component,OnInit } from '@angular/core';
import { ApiPaisesService } from './../services/api-paises.service';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.css']
})
export class RegiaoComponent implements OnInit {

  dadosDaAPITD: any[] = [];

  dadosDaAPIRG: any[] = [];
  nome: string = ''

  constructor(private apiPaisesService: ApiPaisesService) {}

  ngOnInit(): void {
    //TODOS OS PAÍSES
    this.mostraDadosTD();
  }

  mostraDadosTD(){
    this.apiPaisesService.getDadosDaAPITD().subscribe( data =>{
      this.dadosDaAPITD = data;
      console.log(this.dadosDaAPITD)
    })
  }


}
