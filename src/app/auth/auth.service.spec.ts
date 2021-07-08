import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './session/storage.service';
import { TokenModel } from './session/token.model';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    const ngZoneStub = () => ({ runOutsideAngular: function0 => ({}) });
    const routerStub = () => ({ navigate: array => ({}) });
    const storageServiceStub = () => ({
      getToken: () => ({}),
      setToken: token => ({}),
      setLocalUser: arg => ({})
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: NgZone, useFactory: ngZoneStub },
        { provide: Router, useFactory: routerStub },
        { provide: StorageService, useFactory: storageServiceStub }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('sucessfullLogin', () => {
    it('makes expected calls', () => {
      const storageServiceStub: StorageService = TestBed.inject(StorageService);
      const tokenModelStub: TokenModel = {} as any;
      spyOn(storageServiceStub, 'setToken').and.callThrough();
      service.sucessfullLogin(tokenModelStub);
      expect(storageServiceStub.setToken).toHaveBeenCalled();
    });
  });

  describe('isLoggedIn', () => {
    it('makes expected calls', () => {
      const storageServiceStub: StorageService = TestBed.inject(StorageService);
      spyOn(storageServiceStub, 'getToken').and.callThrough();
      service.isLoggedIn();
      expect(storageServiceStub.getToken).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const ngZoneStub: NgZone = TestBed.inject(NgZone);
      const routerStub: Router = TestBed.inject(Router);
      const storageServiceStub: StorageService = TestBed.inject(StorageService);
      spyOn(ngZoneStub, 'runOutsideAngular').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(storageServiceStub, 'setLocalUser').and.callThrough();
      spyOn(storageServiceStub, 'setToken').and.callThrough();
      service.logout();
      expect(ngZoneStub.runOutsideAngular).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(storageServiceStub.setLocalUser).toHaveBeenCalled();
      expect(storageServiceStub.setToken).toHaveBeenCalled();
    });
  });

  describe('getUser', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getUser().subscribe(res => {
        expect(res).toEqual();
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      req.flush();
      httpTestingController.verify();
    });
  });
});
