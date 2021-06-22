import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextListComponent } from './context-list/context-list.component';


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
    component: ContextListComponent,
    canLoad: [],
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContextRoutingModule { }