import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContextRoutingModule } from './context-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ListContextComponent } from './list-context/list-context.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteContextComponent } from './delete-context/delete-context.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FilterBottomSheetComponent } from './list-context/filter-bottom-sheet';
import { RegisterContextComponent } from './register-context/register-context.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [ListContextComponent, DeleteContextComponent, FilterBottomSheetComponent, RegisterContextComponent],
  imports: [
    CommonModule,
    ContextRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    SharedModule,
    MatBottomSheetModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ContextModule { }
