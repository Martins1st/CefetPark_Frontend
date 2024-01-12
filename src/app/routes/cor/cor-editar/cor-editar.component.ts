import { Component, OnInit } from '@angular/core';
import { CorCadastrarComponent } from '../cor-cadastrar/cor-cadastrar.component';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { CorService } from 'src/app/api/services/cor.service';
import { LoadingService } from 'src/app/core/services/loading.service';

import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModel } from 'src/app/api/models/common.model';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';

@Component({
  selector: 'app-cor-editar',
  templateUrl: '../cor-cadastrar/cor-cadastrar.component.html',
  styleUrls: ['../cor-cadastrar/cor-cadastrar.component.scss']
})
export class CorEditarComponent extends CorCadastrarComponent implements OnInit  {

  override function: ECommonFunction = ECommonFunction.ATUALIZAR;

  constructor(protected override readonly corService: CorService, protected override readonly messageService: MessageService, protected override readonly loadingService: LoadingService, private route: ActivatedRoute, protected override router: Router){
    super(corService, messageService, loadingService, router)
  }

  override ngOnInit(): void {
    this.ObterPorId();
  }

  ObterPorId(){
    this.loadingService.ativar();
    let id = this.route.snapshot.params['id'];
    this.corService.ObterPorId(id).subscribe(
      {
        next:(response) =>{
          this.loadingService.desativar();
          this.PreencherForm(response);
        },
        error:() => this.loadingService.desativar()
      }
    )
  }

  override Salvar(){
    let cor = this.form.value as CommonModel;
    this.loadingService.ativar();

    this.corService.Atualizar(cor).subscribe(
      {
        next: () =>{
          this.loadingService.desativar();
          this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        },
        error: () => this.loadingService.desativar()
      }
    )

  }

  PreencherForm(commonModel: CommonModel){
    this.form.setValue({id: commonModel.id, nome: commonModel.nome});
  }

}
