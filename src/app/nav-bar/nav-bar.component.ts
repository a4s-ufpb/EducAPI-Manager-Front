import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']

})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verPerfil(): void {
    this.router.navigate([''])
  }
  editarPerfil(): void {
    this.router.navigate([''])
  }
  sair(): void {
    this.router.navigate([''])
  }
  criar(): void {
    this.router.navigate([''])
  }
  home(): void {
    this.router.navigate([''])
  }
}
