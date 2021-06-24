import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContextComponent } from './list-context.component';

describe('ListagemContextosComponent', () => {
  let component: ListContextComponent;
  let fixture: ComponentFixture<ListContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
