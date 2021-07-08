import { TestBed } from '@angular/core/testing';
import { Route } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoggedInGuard } from './loggedin.guard';

describe('LoggedInGuard', () => {
  let service: LoggedInGuard;

  beforeEach(() => {
    const authServiceStub = () => ({
      isLoggedIn: () => ({}),
      handleLogin: arg => ({})
    });
    TestBed.configureTestingModule({
      providers: [
        LoggedInGuard,
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    service = TestBed.inject(LoggedInGuard);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('canLoad', () => {
    it('makes expected calls', () => {
      const routeStub: Route = {} as any;
      spyOn(component, 'checkAuthentication').and.callThrough();
      service.canLoad(routeStub);
      expect(service.checkAuthentication).toHaveBeenCalled();
    });
  });

  describe('canActivate', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = {} as any;
      const routerStateSnapshotStub: RouterStateSnapshot = {} as any;
      spyOn(component, 'checkAuthentication').and.callThrough();
      service.canActivate(activatedRouteSnapshotStub, routerStateSnapshotStub);
      expect(service.checkAuthentication).toHaveBeenCalled();
    });
  });
});
