import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastorDesafiosComponent } from './desafios/cadastor-desafios/cadastor-desafios.component';
import { CadastraContextoComponent } from './contextos/cadastra-contexto/cadastra-contexto.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './CadastroUsuário/header.component';
import { EdicaoContextoComponent } from './contextos/edicaoContexto/edicao-contexto/edicao-contexto.component';
import { EdicaoDesafioComponent } from './desafios/edicaoDesafio/edicao-desafio/edicao-desafio.component';





@NgModule({
  declarations: [
    AppComponent,
    CadastorDesafiosComponent,
    HeaderComponent,
    CadastraContextoComponent,
    EdicaoContextoComponent,
    EdicaoDesafioComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
