import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Context } from 'vm';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-cadastra-contexto',
  templateUrl: './cadastra-contexto.component.html',
  styleUrls: ['./cadastra-contexto.component.css']
})
export class CadastraContextoComponent implements OnInit {

  constructor(
    
    private router:Router,
    private contextService:ContextService,

    ) {


   }

  ngOnInit(): void {
  }

  salvar(): void {
    this.router.navigate([''])
  }
  cancelar(): void {
    this.router.navigate([''])
  }
  

}
