import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContextComponent } from './register-context.component';

describe('RegisterContextComponent', () => {
  let component: RegisterContextComponent;
  let fixture: ComponentFixture<RegisterContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
