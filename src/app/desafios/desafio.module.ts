import { ListDesafiosComponent } from './list-desafios/list-desafios.component';
import { EdicaoDesafioComponent } from './edicaoDesafio/edicao-desafio/edicao-desafio.component';
import { CadastorDesafiosComponent } from './cadastor-desafios/cadastor-desafios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesafioRoutingModule } from './desafio-routing.module';

@NgModule({
  declarations: [CadastorDesafiosComponent, EdicaoDesafioComponent, ListDesafiosComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    DesafioRoutingModule
  ],
  providers:[  ]
})
export class DesafioModule { }
