import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Page } from 'src/app/shared/model/page.model';
import { PageEvent } from '@angular/material/paginator';
import { ContextModel } from '../context.model';
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


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private contextService: ContextService) {
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
    console.log(imageUrl)
    return imageUrl !== undefined && imageUrl !== null && imageUrl !== '' ? imageUrl : '../../../assets/img/image-not-found.png';
  }

  openContextView() {
    console.log("Redirecionar para a tela de ver desafios")
  }

  getServerData(event?: PageEvent) {
    this.contextService.findAllContextPerPage(event?.pageIndex, event?.pageSize, true).subscribe(
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


}
