import { Component } from '@angular/core';
import { ApiPaisesService } from './../services/api-paises.service';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})
export class AfricaComponent {
  dadosDaAPIAF: any[] = [];


  constructor(private apiPaisesService: ApiPaisesService) {}

  ngOnInit(): void {
    //TODOS OS PAÍSES
    this.mostraDadosAF();
    //PA[ISES POR REGIÃO
  }

  mostraDadosAF(){
    this.apiPaisesService.getDadosDaAPIAF().subscribe( data =>{
      this.dadosDaAPIAF = data;
    })
  }

}
