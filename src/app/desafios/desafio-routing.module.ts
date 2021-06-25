import { CadastorDesafiosComponent } from './cadastor-desafios/cadastor-desafios.component';
import { ListDesafiosComponent } from './list-desafios/list-desafios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'list',
    component: ListDesafiosComponent,
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'save',
    component: CadastorDesafiosComponent,
    canLoad: [],
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesafioRoutingModule { }
