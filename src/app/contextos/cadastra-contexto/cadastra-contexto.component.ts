import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-contexto',
  templateUrl: './cadastra-contexto.component.html',
  styleUrls: ['./cadastra-contexto.component.css']
})
export class CadastraContextoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.router.navigate([''])
  }
  cancelar(): void {
    this.router.navigate([''])
  }
  

}
