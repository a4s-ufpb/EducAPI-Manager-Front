import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/auth/session/storage.service';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

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
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private storageService: StorageService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.editProfileFormGroup = this.formBuilder.group({
      name: [this.getUserName(), []],
      password: [undefined, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [undefined, [Validators.required, Validators.minLength(8)]],
    },{
      validator: this.checkPasswords,
    });
  }

  checkPasswords(group: FormGroup) {
    const password = group!.get('password')?.value;
    const confirmPassword = group!.get('confirmPassword')?.value;
    return  password === confirmPassword ?  true : { notSame: true };;
  }


  getUserName(){
    return this.storageService.getLocalUser()?.name;
  }

  save(): void {
    this.userService.updateUser(this.editProfileFormGroup?.get('name')?.value, 
      this.editProfileFormGroup?.get('password')?.value).subscribe(
        result => {
          this.saveEvent.emit()
          this.toastr.success('As atualizações do seu perfil foram salvas com sucesso','Atualizações salvas com sucesso!');
        },
        error => {
          this.toastr.error('Tente novamente','Erro ao salvar alterações no perfil');
        },          
    );
  }

  end(): void {
    this.cancelEvent.emit();
  }

  get password() {
    return this.editProfileFormGroup?.get('password');
  }

  get confirmPassword() {
    return this.editProfileFormGroup?.get('confirmPassword');
  }
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control!.parent!.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}