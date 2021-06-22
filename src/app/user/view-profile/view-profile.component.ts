import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/auth/session/storage.service';
import { ContextModel } from 'src/app/context/model/context.model';
import { UserService } from '../user.service';

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
  ) { }

  ngOnInit(): void {
    this.getUserContexts();
  }
  
  redirectToContextHome(){
    console.log("Context Home")
  }

  redirectToEditUser(){
    console.log("Open edit User")
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
}
