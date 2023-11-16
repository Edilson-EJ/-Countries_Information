import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NacoesInformacoesComponent } from './nacoes-informacoes/nacoes-informacoes.component';
import { RegiaoComponent } from './regiao/regiao.component';
import { AfricaComponent } from './africa/africa.component';
import { AmericaComponent } from './america/america.component';
import { AsiaComponent } from './asia/asia.component';
import { EuropeComponent } from './europe/europe.component';
import { OceaniaComponent } from './oceania/oceania.component';


const routes: Routes = [
    {path: 'oceania', component: OceaniaComponent},
    {path: 'europe', component: EuropeComponent},
    {path: 'asia', component: AsiaComponent},
    {path: 'america', component: AmericaComponent},
    {path: 'africa', component: AfricaComponent},
    {path: 'regiao', component: RegiaoComponent},
    {path: '', component: NacoesInformacoesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
