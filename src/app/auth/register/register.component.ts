import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../session/storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,) { }

  ngOnInit(): void {
    this.buildForm();
  }

  submit() {
    if (this.registerFormGroup.valid) {
      this.authService.register(this.registerFormGroup.value.email
        , this.registerFormGroup.value.name, this.registerFormGroup.value.password).subscribe(
          result => {
            this.loginNewUser(this.registerFormGroup.value.email, this.registerFormGroup.value.password);
          }
        );
    }
  }

  loginNewUser(email: string, password: string) {
    this.authService.authenticate(email, password)
      .subscribe(result => {
        this.authService.sucessfullLogin(result);
        this.getUser();
      })
  }

  getUser() {
    this.authService.getUser().subscribe(result => {
      this.storageService.setLocalUser(result);
      this.redirectToContexts();
    });
  }

  redirectToContexts() {
    this.router.navigate(['/contexts']);
  }

  buildForm() {
    this.registerFormGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      name: [''],
      password: [undefined, [Validators.required]]
    })
  }
}
