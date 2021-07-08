import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FilterBottomSheetComponent } from './filter-bottom-sheet';

describe('FilterBottomSheetComponent', () => {
  let component: FilterBottomSheetComponent;
  let fixture: ComponentFixture<FilterBottomSheetComponent>;

  beforeEach(() => {
    const matBottomSheetRefStub = () => ({ dismiss: () => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FilterBottomSheetComponent],
      providers: [
        { provide: MatBottomSheetRef, useFactory: matBottomSheetRefStub }
      ]
    });
    fixture = TestBed.createComponent(FilterBottomSheetComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
