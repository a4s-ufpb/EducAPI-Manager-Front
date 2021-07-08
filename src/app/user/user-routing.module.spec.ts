import { TestBed } from '@angular/core/testing';
import { UserRoutingModule } from './user-routing.module';

describe('UserRoutingModule', () => {
  let pipe: UserRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserRoutingModule] });
    pipe = TestBed.inject(UserRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
