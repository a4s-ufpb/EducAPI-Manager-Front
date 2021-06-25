import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ContextModel } from '../context.model';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-delete-context',
  templateUrl: './delete-context.component.html',
  styleUrls: ['./delete-context.component.css']
})
export class DeleteContextComponent implements OnInit {

  public context !: ContextModel;


  public saveEvent = new EventEmitter();
  public cancelEvent = new EventEmitter();

  constructor(public dialog: MatDialog,
    private contextService: ContextService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
  }

  getImage(imageUrl: string) {
    return imageUrl !== undefined && imageUrl !== null && imageUrl !== '' ? imageUrl : '../../../assets/img/image-not-found.png';
  }

  deleteContext(){
    this.contextService.deleteContext(this.context.id).subscribe(
      result => {
        this.saveEvent.emit()
        this.toastr.success('O contexto foi deletado com sucesso','Contexto deletado!');
      }, 
      error => {
        this.toastr.error('Tente novamente','Erro ao deletar o contexto');
      },        
    );
  }

  end(){
    this.cancelEvent.emit();
  }

}
