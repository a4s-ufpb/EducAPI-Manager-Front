import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraContextoComponent } from './cadastra-contexto/cadastra-contexto.component';
import { ListContextComponent } from './list-context/list-context.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'save',
    pathMatch: 'full',
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'list',
    component: ListContextComponent,
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'save',
    component: CadastraContextoComponent,
    canLoad: [],
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContextRoutingModule { }
