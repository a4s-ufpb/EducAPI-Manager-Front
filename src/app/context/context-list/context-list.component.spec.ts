import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemContextosComponent } from './context-list.component';

describe('ListagemContextosComponent', () => {
  let component: ListagemContextosComponent;
  let fixture: ComponentFixture<ListagemContextosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemContextosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemContextosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
