import { Component, OnInit } from '@angular/core';
import { DepartamentoCadastrarComponent } from '../departamento-cadastrar/departamento-cadastrar.component';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { DepartamentoService } from 'src/app/api/services/departamento.service';
import { CommonModel } from 'src/app/api/models/common.model';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-departamento-editar',
  templateUrl: '../departamento-cadastrar/departamento-cadastrar.component.html',
  styleUrls: ['../departamento-cadastrar/departamento-cadastrar.component.scss']
})
export class DepartamentoEditarComponent extends DepartamentoCadastrarComponent implements OnInit {

  override function: ECommonFunction = ECommonFunction.ATUALIZAR;

  constructor(protected override readonly departamentoService: DepartamentoService, protected override readonly messageService: MessageService, protected override readonly loadingService: LoadingService, private route: ActivatedRoute, protected override readonly router: Router){
    super(departamentoService, messageService, loadingService, router)
  }

  override ngOnInit(): void {
    this.ObterPorId();
  }

  ObterPorId(){
    this.loadingService.ativar();
    let id = this.route.snapshot.params['id'];
    this.departamentoService.ObterPorId(id).subscribe(
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

    this.departamentoService.Atualizar(cor).subscribe(
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
