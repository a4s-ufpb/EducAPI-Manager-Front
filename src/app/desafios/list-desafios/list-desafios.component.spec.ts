import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesafiosComponent } from './list-desafios.component';

describe('ListDesafiosComponent', () => {
  let component: ListDesafiosComponent;
  let fixture: ComponentFixture<ListDesafiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDesafiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesafiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
