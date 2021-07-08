import { TestBed } from '@angular/core/testing';
import { ContextRoutingModule } from './context-routing.module';

describe('ContextRoutingModule', () => {
  let pipe: ContextRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ContextRoutingModule] });
    pipe = TestBed.inject(ContextRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
