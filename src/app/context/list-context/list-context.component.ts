import { Component, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Page } from 'src/app/shared/model/page.model';
import { PageEvent } from '@angular/material/paginator';
import { ContextModel } from '../context.model';
import { UserModel } from 'src/app/auth/session/user.model';
import { StorageService } from 'src/app/auth/session/storage.service';
import {MatDialog} from '@angular/material/dialog';
import { DeleteContextComponent } from '../delete-context/delete-context.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FilterBottomSheetComponent } from './filter-bottom-sheet';
import { ContextService } from '../context.service';



export interface Contract {
  Id: string;
  Name: string;
  Author: string;
  Image: string;
}

@Component({
  selector: 'app-list-context',
  templateUrl: './list-context.component.html',
  styleUrls: ['./list-context.component.css']
})

export class ListContextComponent implements OnInit {

  currentsPageContexts: Page<ContextModel> | undefined;
  pageEvent: PageEvent | undefined;
  datasource: ContextModel[] | undefined;
  pageIndex: number | undefined;
  pageSize: number | undefined;
  length: number | undefined;
  panelOpenState = false;
  email: string | undefined;


  constructor(iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer, 
    private contextService: ContextService, 
    private storage: StorageService,
    public dialogDeleteUser: MatDialog,
    private _bottomSheet: MatBottomSheet
    ) {
    iconRegistry.addSvgIcon(
      'view-button',
      sanitizer.bypassSecurityTrustResourceUrl('assets/view-button.svg'));
  }

  ngOnInit(): void {
    this.getServerData(undefined);
  }

  get contexts() {
    return this.currentsPageContexts?.content;
  }

  getImage(imageUrl: string) {
    return imageUrl !== undefined && imageUrl !== null && imageUrl !== '' ? imageUrl : '../../../assets/img/image-not-found.png';
  }

  openContextView() {
    console.log("Redirecionar para a tela de ver desafios")
  }

  getServerData(event?: PageEvent) {
    this.contextService.findAllContextPerPage(event?.pageIndex, event?.pageSize, true, '', this.email).subscribe(
      response => {
        this.datasource = response.content;
        this.pageIndex = response.number;
        this.pageSize = response.size;
        this.length = response.totalElements;
      },
      error => {
        console.log("Pagination Error")
      }
    );
    return event;
  }

  loggedUserIsOwner(creator: UserModel) {
    return creator.email === this.storage.getLocalUser()?.email;
  }

  openDialogDelete(context: ContextModel){
    const dialogDeleteUser = this.dialogDeleteUser.open(DeleteContextComponent);
    dialogDeleteUser.componentInstance.context=context;
    dialogDeleteUser.componentInstance.saveEvent.subscribe(
      result => {
        dialogDeleteUser.close();
        this.getServerData(undefined);
      }
    );
    dialogDeleteUser.componentInstance.cancelEvent.subscribe(
      result => dialogDeleteUser.close()
    );
  }

  openBottomSheet(): void {
    const btn = this._bottomSheet.open(FilterBottomSheetComponent);
    btn.instance.saveEvent.subscribe(
      result =>{
        this.email = result;
        this.getServerData(undefined);
        btn.dismiss();
      }
    );
    btn.instance.cancelEvent.subscribe(
      result =>{
        btn.dismiss();
      }
    );
  }

}