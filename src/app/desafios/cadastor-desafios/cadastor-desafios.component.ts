import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastor-desafios',
  templateUrl: './cadastor-desafios.component.html',
  styleUrls: ['./cadastor-desafios.component.css']
})
export class CadastorDesafiosComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.router.navigate(['']);
  }
  end(): void {
    this.router.navigate(['']);
  }
  back(): void {
    this.router.navigate(['']);
  }
}
