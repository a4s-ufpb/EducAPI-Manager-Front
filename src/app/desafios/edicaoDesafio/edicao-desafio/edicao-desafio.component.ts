import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edicao-desafio',
  templateUrl: './edicao-desafio.component.html',
  styleUrls: ['./edicao-desafio.component.css']
})
export class EdicaoDesafioComponent implements OnInit {

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
