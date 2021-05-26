import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContextComponent } from './context.component';
import { ContextRoutingModule } from './context-routing.module';





@NgModule({
  declarations: [ContextComponent],
  imports: [
    CommonModule,
    ContextRoutingModule,
    FlexLayoutModule,
  ]
})
export class ContextModule { }