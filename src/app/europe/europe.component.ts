import { Component } from '@angular/core';
import { ApiPaisesService } from './../services/api-paises.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent {
  dadosDaAPIEU: any[] = [];


  constructor(private apiPaisesService: ApiPaisesService) {}

  ngOnInit(): void {
    //TODOS OS PAÍSES
    this.mostraDadosEU();
    //PA[ISES POR REGIÃO
  }

  mostraDadosEU(){
    this.apiPaisesService.getDadosDaAPIEU().subscribe( data =>{
      this.dadosDaAPIEU = data;
    })
}
}
