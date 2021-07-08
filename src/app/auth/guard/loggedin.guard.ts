import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService){

  }

  canLoad(route: Route): boolean{
    return this.checkAuthentication(route.path);
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activatedRoute.routeConfig?.path);
  }

  checkAuthentication(path: string | undefined | null): boolean {
    const loggedIn = this.authService.isLoggedIn();
    if (!loggedIn){
      this.authService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

}
