import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { StorageService } from '../auth/session/storage.service';
import { ContextModel } from './context.model';
import { ContextService } from './context.service';

describe('ContextService', () => {
  let service: ContextService;

  beforeEach(() => {
    const storageServiceStub = () => ({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ContextService,
        { provide: StorageService, useFactory: storageServiceStub }
      ]
    });
    service = TestBed.inject(ContextService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('save', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const contextModelStub: ContextModel = {} as any;
      service.save(contextModelStub).subscribe(res => {
        expect(res).toEqual(contextModelStub);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('POST');
      req.flush(contextModelStub);
      httpTestingController.verify();
    });
  });
});
