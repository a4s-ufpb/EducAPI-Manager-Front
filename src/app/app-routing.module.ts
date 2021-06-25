import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CadastorDesafiosComponent } from './desafios/cadastor-desafios/cadastor-desafios.component';

import { CadastraContextoComponent} from "./contextos/cadastra-contexto/cadastra-contexto.component"
import {HeaderComponent} from "./CadastroUsuário/header.component"
import { EdicaoContextoComponent } from './contextos/edicaoContexto/edicao-contexto/edicao-contexto.component';
import { EdicaoDesafioComponent } from './desafios/edicaoDesafio/edicao-desafio/edicao-desafio.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
    canLoad: [],
    canActivate: [],
  },


  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'contexts',
    loadChildren: () =>
      import('./contextos/context.module').then((m) => m.ContextModule),
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
    data: {
      breadcrumb: 'Home',
    },


  },

  {

    path: "desafios",
    component: CadastorDesafiosComponent
  },
  {
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
