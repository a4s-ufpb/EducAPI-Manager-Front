import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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
