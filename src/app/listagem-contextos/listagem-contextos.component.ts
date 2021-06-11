import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
export interface Contract {
  Id: string;
  Name: string;
  Author: string;
  Image: string;
}

@Component({
  selector: 'app-listagem-contextos',
  templateUrl: './listagem-contextos.component.html',
  styleUrls: ['./listagem-contextos.component.css']
})

export class ListagemContextosComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'view-button',
        sanitizer.bypassSecurityTrustResourceUrl('assets/view-button.svg'));
  }

  ngOnInit(): void {
  }

  contextos: Array<Contract> =[
    {
      Id:'#1',
      Name: 'Name 1',
      Author: 'Ayla',
      Image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      Id:'#2',
      Name: 'Name 2',
      Author: 'Ayla2',
      Image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      Id:'#3',
      Name: 'Name 3',
      Author: 'Ayla3',
      Image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    }
  
  ]

}
