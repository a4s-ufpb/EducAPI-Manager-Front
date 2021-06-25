import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraContextoComponent } from './cadastra-contexto.component';

describe('CadastraContextoComponent', () => {
  let component: CadastraContextoComponent;
  let fixture: ComponentFixture<CadastraContextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraContextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraContextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
