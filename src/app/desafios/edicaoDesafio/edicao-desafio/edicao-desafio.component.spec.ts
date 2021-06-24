import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoDesafioComponent } from './edicao-desafio.component';

describe('EdicaoDesafioComponent', () => {
  let component: EdicaoDesafioComponent;
  let fixture: ComponentFixture<EdicaoDesafioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoDesafioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
