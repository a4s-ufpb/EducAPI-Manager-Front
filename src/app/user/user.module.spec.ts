import { TestBed } from '@angular/core/testing';
import { UserModule } from './user.module';

describe('UserModule', () => {
  let pipe: UserModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserModule] });
    pipe = TestBed.inject(UserModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
