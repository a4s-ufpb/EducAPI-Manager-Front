import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./auth/auth.module').then((m) => m.AuthModule),
    canLoad: [],
    canActivate: [],
  },
  {
    path: 'contexts',
    loadChildren: () =>
    import('./context/context.module').then((m) => m.ContextModule),
    canLoad: [],
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
