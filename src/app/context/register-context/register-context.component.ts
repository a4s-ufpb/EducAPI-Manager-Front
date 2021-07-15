import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
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
    if(this.contextoForm?.valid){
      this.contextService.save(this.contextoForm.value).subscribe(
        result => {
          this.saveEvent.emit()
          this.toastr.success('O contexto foi criado com sucesso','Contexto criado!');
        },
        error => {
          this.toastr.error('Tente novamente','Erro ao criar o contexto');
        },
      );
    }
  }


  cancel(): void {
    this.cancelEvent.emit();
  }

}
