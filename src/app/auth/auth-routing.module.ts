import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'login',
    component: LoginComponent,
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'login/:to',
    component: LoginComponent,
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canLoad: [],
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }