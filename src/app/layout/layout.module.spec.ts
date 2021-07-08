import { TestBed } from '@angular/core/testing';
import { LayoutModule } from './layout.module';

describe('LayoutModule', () => {
  let pipe: LayoutModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LayoutModule] });
    pipe = TestBed.inject(LayoutModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
