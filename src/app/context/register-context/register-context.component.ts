import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-register-context',
  templateUrl: './register-context.component.html',
  styleUrls: ['./register-context.component.css']
})
export class RegisterContextComponent implements OnInit {

  public contextoForm!: FormGroup;
  public saveEvent = new EventEmitter();
  public cancelEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private contextService: ContextService,
    ) {  }

  ngOnInit(): void {
    this.setUp();
  }

  setUp() {
    this.contextoForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      soundUrl: [''],
      videoUrl: [''],
      imageUrl: ['']
    });


  }

  /** TO DO: Este método não está funcionando devido a problemas na API */
  save(): void {
    if (this.contextoForm?.valid){
      this.contextService.save(this.contextoForm.value).subscribe(
        result => {
          console.log('Salvou');
        }, error => {
          console.log('Deu errado');
        }
      );
    }
  }


  cancel(): void {
    this.cancelEvent.emit();
  }

}
