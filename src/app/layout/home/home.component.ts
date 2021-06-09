import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  redirectToLogin(){
    console.log("login")
  }

  redirectToregister(){
    console.log("cadastrar")
  }
  redirectToPlayStore(){
    console.log("playstore")
  }
}
