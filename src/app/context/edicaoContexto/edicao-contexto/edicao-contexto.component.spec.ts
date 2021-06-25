import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoContextoComponent } from './edicao-contexto.component';

describe('EdicaoContextoComponent', () => {
  let component: EdicaoContextoComponent;
  let fixture: ComponentFixture<EdicaoContextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoContextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoContextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
