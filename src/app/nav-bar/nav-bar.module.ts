import { NavBarRoutingModule } from './nav-bar-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavBarComponent } from "./nav-bar.component";



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    NavBarRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatInputModule,
  ],
  providers: []
})
export class NavBarModule { }
