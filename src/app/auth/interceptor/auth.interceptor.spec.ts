import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../session/storage.service';
import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let service: AuthInterceptor;

  beforeEach(() => {
    const authServiceStub = () => ({
      isLoggedIn: () => ({}),
      handleLogin: arg => ({})
    });
    const routerStub = () => ({});
    const activatedRouteStub = () => ({
      snapshot: { url: { join: () => ({}) } }
    });
    const storageServiceStub = () => ({ getToken: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        AuthInterceptor,
        { provide: AuthService, useFactory: authServiceStub },
        { provide: Router, useFactory: routerStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: StorageService, useFactory: storageServiceStub }
      ]
    });
    service = TestBed.inject(AuthInterceptor);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpRequestStub: HttpRequest = {} as any;
      const httpHandlerStub: HttpHandler = {} as any;
      const authServiceStub: AuthService = TestBed.inject(AuthService);
      const storageServiceStub: StorageService = TestBed.inject(StorageService);
      spyOn(httpRequestStub, 'clone').and.callThrough();
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      spyOn(authServiceStub, 'isLoggedIn').and.callThrough();
      spyOn(authServiceStub, 'handleLogin').and.callThrough();
      spyOn(storageServiceStub, 'getToken').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpRequestStub.clone).toHaveBeenCalled();
      expect(httpHandlerStub.handle).toHaveBeenCalled();
      expect(authServiceStub.isLoggedIn).toHaveBeenCalled();
      expect(authServiceStub.handleLogin).toHaveBeenCalled();
      expect(storageServiceStub.getToken).toHaveBeenCalled();
    });
  });
});
