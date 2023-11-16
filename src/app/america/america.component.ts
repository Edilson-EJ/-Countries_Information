import { Component } from '@angular/core';
import { ApiPaisesService } from './../services/api-paises.service';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css']
})
export class AmericaComponent {
  dadosDaAPIAM: any[] = [];


  constructor(private apiPaisesService: ApiPaisesService) {}

  ngOnInit(): void {
    //TODOS OS PAÍSES
    this.mostraDadosAF();
    //PA[ISES POR REGIÃO
  }

  mostraDadosAF(){
    this.apiPaisesService.getDadosDaAPIAM().subscribe( data =>{
      this.dadosDaAPIAM = data;
    })
}

}
