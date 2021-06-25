import { DesafioModule } from './desafios/desafio.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canLoad: [],
    canActivate: [],
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
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
    path: 'nav',
    loadChildren: () =>
      import('./nav-bar/nav-bar.module').then((m) => m.NavBarModule),
    data: {
      breadcrumb: 'Nav',
    },
  },
  {
    path: 'desafios',
    loadChildren: () =>
      import('./desafios/desafio.module').then((m) => m.DesafioModule),
    data: {
      breadcrumb: 'Desafios',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
