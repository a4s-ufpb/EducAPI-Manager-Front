import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RegisterContextComponent } from '../context/register-context/register-context.component';
import { ContextModel } from '../context/context.model';
import { ContextService } from '../context/context.service';
import { EditProfileComponent } from '../user/edit-profile/edit-profile.component';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']

})
export class NavBarComponent implements OnInit {

  search: FormControl = new FormControl('', []);
  resultContexts: ContextModel[] | undefined = [];

  constructor(private router: Router,
    private authService: AuthService,
    public dialogEditUser: MatDialog,
    private contextService: ContextService,
    public dialogRegisterContext: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  verPerfil(): void {
    this.router.navigate(['/user/profile'])
  }

  openDialogEditUser(): void {
    const dialogEditUser = this.dialogEditUser.open(EditProfileComponent);
    dialogEditUser.componentInstance.saveEvent.subscribe(
      result => dialogEditUser.close()
    );
    dialogEditUser.componentInstance.cancelEvent.subscribe(
      result => dialogEditUser.close()
    );
  }

  sair(): void {
    this.authService.logout();
  }
  
  criar(): void {
    const dialogRegisterContext = this.dialogRegisterContext.open(RegisterContextComponent);
    dialogRegisterContext.componentInstance.saveEvent.subscribe(
      result => dialogRegisterContext.close()
      );
    dialogRegisterContext.componentInstance.cancelEvent.subscribe(
      result => dialogRegisterContext.close()
    );
  }


  home(): void {
    this.router.navigate(['/contexts/list'])
  }

  stringSearch() {
    const searchedValue = this.search.value;
    this.contextService.findAllContextPerPage(0, 25, false, searchedValue).subscribe(
      result => {
        console.log(result);
        this.resultContexts = result.content;
      }
    );
  }

  selectOption(e: MatAutocompleteSelectedEvent) {
    const item: ContextModel = e.option.value;
    this.router.navigate(['']);
  }

  itemDisplayFn(item: ContextModel) {
      return item ? item.name : '';
  }

}
