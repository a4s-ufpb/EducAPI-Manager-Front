import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edicao-contexto',
  templateUrl: './edicao-contexto.component.html',
  styleUrls: ['./edicao-contexto.component.css']
})
export class EdicaoContextoComponent implements OnInit {

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
