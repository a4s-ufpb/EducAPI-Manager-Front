import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { ContextModel } from '../context.model';
import { ContextService } from '../context.service';
import { Page } from 'src/app/shared/model/page.model';


export interface Contract {
  Id: string;
  Name: string;
  Author: string;
  Image: string;
}

@Component({
  selector: 'app-listagem-contextos',
  templateUrl: './list-context.component.html',
  styleUrls: ['./list-context.component.css']
})

export class ListContextComponent implements OnInit {

  pageContexts: Page<ContextModel> | undefined ;


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private contextService: ContextService) {
    iconRegistry.addSvgIcon(
        'view-button',
        sanitizer.bypassSecurityTrustResourceUrl('assets/view-button.svg'));
  }

  ngOnInit(): void {
    this.getAllContexts();
  }

  get contexts(){
    return this.pageContexts?.content;
  }

  getAllContexts(){
    this.contextService.findAllContextPerPage().subscribe(
      result => {
        console.log(result);
        this.pageContexts = result;
      }
    );
  }

  getImage(imageUrl: string){
    return imageUrl !== undefined && imageUrl !== null && imageUrl !== '' ? imageUrl : '../../../assets/img/image-not-found.png';
  }


}
