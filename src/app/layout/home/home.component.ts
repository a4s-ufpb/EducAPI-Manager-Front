import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  redirectToLogin(){
    this.router.navigate(['../auth/login']);
  }

  redirectToregister(){
    this.router.navigate(['../auth/register']);
  }
  redirectToPlayStore(){
    window.open('https://play.google.com/store/apps/developer?id=Projeto+Apps4Society+da+UFPB');
  }
}
