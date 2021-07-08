import { TestBed } from '@angular/core/testing';
import { AuthRoutingModule } from './auth-routing.module';

describe('AuthRoutingModule', () => {
  let pipe: AuthRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthRoutingModule] });
    pipe = TestBed.inject(AuthRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
