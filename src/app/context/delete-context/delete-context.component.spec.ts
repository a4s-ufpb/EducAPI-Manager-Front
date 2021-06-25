import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContextComponent } from './delete-context.component';

describe('DeleteContextComponent', () => {
  let component: DeleteContextComponent;
  let fixture: ComponentFixture<DeleteContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
