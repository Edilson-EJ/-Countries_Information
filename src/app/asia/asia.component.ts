import { Component } from '@angular/core';
import { ApiPaisesService } from './../services/api-paises.service';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent {
  dadosDaAPIAS: any[] = [];


  constructor(private apiPaisesService: ApiPaisesService) {}

  ngOnInit(): void {
    //TODOS OS PAÍSES
    this.mostraDadosAS();
    //PA[ISES POR REGIÃO
  }

  mostraDadosAS(){
    this.apiPaisesService.getDadosDaAPIAS().subscribe( data =>{
      this.dadosDaAPIAS = data;
    })
}
}
