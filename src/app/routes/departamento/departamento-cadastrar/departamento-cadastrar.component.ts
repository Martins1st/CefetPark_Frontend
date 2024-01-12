import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonModel } from 'src/app/api/models/common.model';
import { DepartamentoService } from 'src/app/api/services/departamento.service';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { ECommonTitle } from 'src/app/core/enums/common-tittle.enum';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-departamento-cadastrar',
  templateUrl: './departamento-cadastrar.component.html',
  styleUrls: ['./departamento-cadastrar.component.scss']
})
export class DepartamentoCadastrarComponent implements OnInit {

  
  form = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null, Validators.required),
  })


  title = ECommonTitle.CADASTRAR;
  function = ECommonFunction.SALVAR;

  constructor(protected readonly departamentoService: DepartamentoService, protected readonly messageService: MessageService, protected readonly loadingService: LoadingService, protected readonly router: Router){

  }
  
  ngOnInit(): void {
    
  }


  Salvar(){
    this.loadingService.ativar();
    let cor = this.form.value as CommonModel;
    
    this.departamentoService.Cadastrar(cor).subscribe({
      next: (response) =>{
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        this.loadingService.desativar();
        setTimeout(() => {  
          this.router.navigate(["/departamento/listar"])
          }, 1500);
      },
      error: () => this.loadingService.desativar()
    })
  }
}
