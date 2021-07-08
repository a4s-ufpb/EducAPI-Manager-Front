import { Component, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'filter-bottom-sheet',
  templateUrl: 'filter-bottom-sheet.html',
  styleUrls: ['./list-context.component.css']
})
export class FilterBottomSheetComponent {

  userEmail: FormControl = new FormControl('', []);
  saveEvent = new EventEmitter();
  cancelEvent = new EventEmitter();


  constructor(private _bottomSheetRef: MatBottomSheetRef<FilterBottomSheetComponent>, ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  save(){
    this.saveEvent.emit(this.userEmail.value);
  }

  end(){
    this.cancelEvent.emit();
  }
}
