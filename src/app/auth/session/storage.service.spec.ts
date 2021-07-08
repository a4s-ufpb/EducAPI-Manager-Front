import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StorageService] });
    spyOn(StorageService.prototype, 'getLocalUser');
    service = TestBed.inject(StorageService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(StorageService.prototype.getLocalUser).toHaveBeenCalled();
    });
  });
});
