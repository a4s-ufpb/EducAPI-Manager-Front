import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { StorageService } from '../session/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFormGroup!: FormGroup;
  public isPassword : boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: [undefined, [Validators.required]]
    });
  }

  submit(){
    if(this.loginFormGroup.valid){
      this.authService.authenticate(this.loginFormGroup.value.email, this.loginFormGroup.value.password)
        .subscribe(result => {
          this.authService.sucessfullLogin(result);
          this.getUser();
        },
        error => {
          this.toastr.error('Seu e-mail ou sua senha estão incorretos, verifique e tente novamente.','Olá!');
        }        
        )
    }
  }

  getUser(){
    this.authService.getUser().subscribe( result => {
      this.storageService.setLocalUser(result);
      this.redirectToContexts();
    });
  }

  redirectToContexts(){
    this.router.navigate(['/contexts']);
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }
}
