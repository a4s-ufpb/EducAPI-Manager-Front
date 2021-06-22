import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContextComponent } from './list-context/list-context.component';


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
    component: ListContextComponent,
    canLoad: [],
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContextRoutingModule { }