import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CadastorDesafiosComponent } from './desafios/cadastor-desafios/cadastor-desafios.component';

import { CadastraContextoComponent} from "./contextos/cadastra-contexto/cadastra-contexto.component"
import {HeaderComponent} from "./CadastroUsuário/header.component"
import { EdicaoContextoComponent } from './contextos/edicaoContexto/edicao-contexto/edicao-contexto.component';
import { EdicaoDesafioComponent } from './desafios/edicaoDesafio/edicao-desafio/edicao-desafio.component';

const routes: Routes = [
{
  path: "",
  component: HeaderComponent
}
,
{

  path: "desafios",
  component: CadastorDesafiosComponent
},{
  path: "contextos",
  component: CadastraContextoComponent
},{
  path: "edicaoContexto",
  component: EdicaoContextoComponent
},{
  path: "edicaoDesafio",
  component: EdicaoDesafioComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
