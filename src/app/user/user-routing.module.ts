import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'profile',
      pathMatch: 'full',
      canLoad: [],
      canActivate: [],
    },
    {
      path: 'profile',
      component: ViewProfileComponent,
      canLoad: [],
      canActivate: [],
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }