import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastorDesafiosComponent } from './cadastor-desafios.component';

describe('CadastorDesafiosComponent', () => {
  let component: CadastorDesafiosComponent;
  let fixture: ComponentFixture<CadastorDesafiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastorDesafiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastorDesafiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
