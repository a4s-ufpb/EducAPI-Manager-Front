import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children : [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'context'
      },
      {
        path: 'context',
        loadChildren: () =>
          import('../context/context.module').then(
            (m) => m.ContextModule
          ),
        data: {
          breadcrumb: 'Contextos',

        },
        canLoad: [],
        canActivate: [],
      },
    ]
  },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }
