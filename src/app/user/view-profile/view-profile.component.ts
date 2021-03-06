import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/auth/session/storage.service';
import { UserService } from '../user.service';
import {MatDialog} from '@angular/material/dialog';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { ContextModel } from 'src/app/context/context.model';
import { DeleteContextComponent } from 'src/app/context/delete-context/delete-context.component';



@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  public userContexts: ContextModel[] | undefined;

  constructor(
    private router: Router,
    private userService: UserService,
    private storage: StorageService,
    public dialogEditUser: MatDialog,
    public dialogDeleteUser: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getUserContexts();
  }

  redirectToContextHome(){
    this.router.navigate(['../contexts/list']);
  }

  openToEditUser(){
    const dialogEditUser = this.dialogEditUser.open(EditProfileComponent);
    dialogEditUser.componentInstance.saveEvent.subscribe(
      result => dialogEditUser.close()
    );
    dialogEditUser.componentInstance.cancelEvent.subscribe(
      result => dialogEditUser.close()
    );
  }

  openContextView(){
    console.log("Open context view")
  }

  getUserContexts(){
    this.userService.getUserContexts().subscribe(
      result => {
        this.userContexts = result;
        console.log(result);
      }
    )
  }

  getLoggedUserName(){
    return this.storage.getLocalUser()?.name;
  }

  getLoggedUserEmail(){
    return this.storage.getLocalUser()?.email;
  }

  getImage(imageUrl: string){
    return imageUrl !== undefined && imageUrl !== null && imageUrl !== '' ? imageUrl : '../../../assets/img/image-not-found.png';
  }

  openDialogDelete(context: ContextModel){
    const dialogDeleteUser = this.dialogDeleteUser.open(DeleteContextComponent);
    dialogDeleteUser.componentInstance.context=context;
    dialogDeleteUser.componentInstance.saveEvent.subscribe(
      result => {
        dialogDeleteUser.close();
        this.getUserContexts();
      }
    );
    dialogDeleteUser.componentInstance.cancelEvent.subscribe(
      result => dialogDeleteUser.close()
    );
  }
}
