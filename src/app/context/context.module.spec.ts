import { TestBed } from '@angular/core/testing';
import { ContextModule } from './context.module';

describe('ContextModule', () => {
  let pipe: ContextModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ContextModule] });
    pipe = TestBed.inject(ContextModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
