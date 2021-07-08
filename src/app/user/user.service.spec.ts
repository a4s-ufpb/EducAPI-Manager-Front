import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../auth/session/storage.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    const ngZoneStub = () => ({});
    const routerStub = () => ({});
    const storageServiceStub = () => ({ getLocalUser: () => ({}) });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService,
        { provide: NgZone, useFactory: ngZoneStub },
        { provide: Router, useFactory: routerStub },
        { provide: StorageService, useFactory: storageServiceStub }
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getUserContexts', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getUserContexts().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
