import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-cadastra-contexto',
  templateUrl: './cadastra-contexto.component.html',
  styleUrls: ['./cadastra-contexto.component.css']
})
export class CadastraContextoComponent implements OnInit {

  public contextoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
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

  salvar(): void {
    if(this.contextoForm?.valid){
      this.contextService.save(this.contextoForm.value).subscribe(
        result => {
          console.log("Salvou");
        }, error => {
          console.log("Deu errado")
        }
      )
    }
  }


  cancelar(): void {
    this.router.navigate([''])
  }


}
