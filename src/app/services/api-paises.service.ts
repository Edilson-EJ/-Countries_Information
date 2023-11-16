import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItensAPI } from '../model/IItensAPI';



@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {
  //CHAMADA GET DOS PAÍSES
  private apiUrlAle = 'https://restcountries.com/v3.1/name/germany';
  private apiUrlUS = 'https://restcountries.com/v3.1/name/usa';
  private apiUrlBR = 'https://restcountries.com/v3.1/name/brazil';
  private apiUrlRUSS = 'https://restcountries.com/v3.1/name/russia';
  private apiUrlCH = 'https://restcountries.com/v3.1/name/cn';
  private apiUrlIN = 'https://restcountries.com/v3.1/name/gb';
  //CHAMADA GET DE TODOS OS PAÍSES
  private apiUrlTD = 'https://restcountries.com/v3.1/all'
  //CHAMADA GET POR REGIÃO
  private apiUrlAM = 'https://restcountries.com/v3.1/region/america'
  private apiUrlEU = 'https://restcountries.com/v3.1/region/europe'
  private apiUrlAF = 'https://restcountries.com/v3.1/region/africa'
  private apiUrlAS = 'https://restcountries.com/v3.1/region/asia'
  private apiUrlOC = 'https://restcountries.com/v3.1/region/oceania'


  constructor(private httpClient: HttpClient) {}

  regiao: string = 'america'

  getDadosDaAPIAle(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlAle);
  }

  getDadosDaAPIUS(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlUS);
  }

  getDadosDaAPIBR(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlBR);
  }

  getDadosDaAPIRUSS(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlRUSS);
  }

  getDadosDaAPICH(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlCH);
  }

  getDadosDaAPIIN(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlIN);
  }

  getDadosDaAPITD(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlTD);
  }

  getDadosDaAPIAM(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlAM);
  }
  getDadosDaAPIEU(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlEU);
  }
  getDadosDaAPIAF(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlAF);
  }
  getDadosDaAPIAS(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlAS);
  }
  getDadosDaAPIOC(): Observable<ItensAPI[]> {
    return this.httpClient.get<ItensAPI[]>(this.apiUrlOC);
  }
}
