import { MatMenuModule } from '@angular/material/menu';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastorDesafiosComponent } from './desafios/cadastor-desafios/cadastor-desafios.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './CadastroUsuário/header.component';
import { EdicaoContextoComponent } from './contextos/edicaoContexto/edicao-contexto/edicao-contexto.component';
import { EdicaoDesafioComponent } from './desafios/edicaoDesafio/edicao-desafio/edicao-desafio.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { StorageService } from './auth/session/storage.service';
import { LoggedInGuard } from './auth/guard/loggedin.guard';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { ListDesafiosComponent } from './desafios/list-desafios/list-desafios.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule,
    CommonModule,
    MatMenuModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    AuthService,
    StorageService,
    LoggedInGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    MatIconModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
