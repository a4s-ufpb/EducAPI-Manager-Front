import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContextRoutingModule } from './context-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ListContextComponent } from '../contextos/list-context/list-context.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CadastraContextoComponent } from './cadastra-contexto/cadastra-contexto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdicaoContextoComponent } from './edicaoContexto/edicao-contexto/edicao-contexto.component';

@NgModule({
  declarations: [ListContextComponent, CadastraContextoComponent, EdicaoContextoComponent],
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
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[

  ]
})
export class ContextModule { }
