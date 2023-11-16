import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoDaPaginaComponent } from './topo-da-pagina/topo-da-pagina.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { PesquisaComponent } from './pesquisa/pesquisa.component'
import { FormsModule } from '@angular/forms';
import { NacoesInformacoesComponent } from './nacoes-informacoes/nacoes-informacoes.component';
import { HttpClientModule } from '@angular/common/http';
import { RegiaoComponent } from './regiao/regiao.component';
import { AmericaComponent } from './america/america.component';
import { EuropeComponent } from './europe/europe.component';
import { AfricaComponent } from './africa/africa.component';
import { AsiaComponent } from './asia/asia.component';
import { OceaniaComponent } from './oceania/oceania.component'

@NgModule({
  declarations: [
    AppComponent,
    TopoDaPaginaComponent,
    PesquisaComponent,
    NacoesInformacoesComponent,
    RegiaoComponent,
    AmericaComponent,
    EuropeComponent,
    AfricaComponent,
    AsiaComponent,
    OceaniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
