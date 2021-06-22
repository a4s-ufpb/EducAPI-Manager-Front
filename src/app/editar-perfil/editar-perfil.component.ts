import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  hide = true;
  hide2 = true;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  save(): void {
    this.router.navigate([''])
  }
  end(): void {
    this.router.navigate([''])
  }

}
