import { TestBed } from '@angular/core/testing';
import { LayoutRoutingModule } from './layout-routing.module';

describe('LayoutRoutingModule', () => {
  let pipe: LayoutRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LayoutRoutingModule] });
    pipe = TestBed.inject(LayoutRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
