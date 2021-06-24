import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/auth/session/storage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  hide = true;
  isPassword = true;
  public editProfileFormGroup!: FormGroup;
  public saveEvent = new EventEmitter();
  public cancelEvent = new EventEmitter();


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.editProfileFormGroup = this.formBuilder.group({
      name: [this.getUserName(), []],
      password: [undefined, []],
      confirmPassword: [undefined, []],
    });
  }

  getUserName(){
    return this.storageService.getLocalUser()?.name;
  }

  save(): void {
    console.log("Salvando");
    this.userService.updateUser(this.editProfileFormGroup?.get('name')?.value, this.editProfileFormGroup?.get('password')?.value).subscribe(
      result => this.saveEvent.emit()
    );
    console.log("Update ok");
  }

  end(): void {
    this.cancelEvent.emit();
  }

}
