import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './home/header/header.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavListComponent } from './home/sidenav-list/sidenav-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderLoggedComponent } from './header-logged/header-logged.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    HeaderLoggedComponent
  ],
  imports: [
    LayoutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule

  ],
  providers: []
})
export class LayoutModule { }
