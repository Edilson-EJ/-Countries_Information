import { Component } from '@angular/core';
import { ApiPaisesService } from './../services/api-paises.service';

@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.css']
})
export class OceaniaComponent {
  dadosDaAPIOC: any[] = [];


  constructor(private apiPaisesService: ApiPaisesService) {}

  ngOnInit(): void {
    //TODOS OS PAÍSES
    this.mostraDadosOC();
    //PA[ISES POR REGIÃO
  }

  mostraDadosOC(){
    this.apiPaisesService.getDadosDaAPIOC().subscribe( data =>{
      this.dadosDaAPIOC = data;
    })
}
}
