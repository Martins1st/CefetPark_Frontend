import { Component } from '@angular/core';
import { ConvidadoCadastrarComponent } from '../convidado-cadastrar/convidado-cadastrar.component';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { ConvidadoService } from 'src/app/api/services/convidado.service';
import { MessageService } from 'primeng/api';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CommonModel } from 'src/app/api/models/common.model';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { ConvidadoModel } from 'src/app/api/models/convidado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarroService } from 'src/app/api/services/carro.service';

@Component({
  selector: 'app-convidado-editar',
  templateUrl: '../convidado-cadastrar/convidado-cadastrar.component.html',
  styleUrls: ['../convidado-cadastrar/convidado-cadastrar.component.scss']
})
export class ConvidadoEditarComponent extends ConvidadoCadastrarComponent {


  override function = ECommonFunction.SALVAR;

  constructor(protected override readonly convidadoService: ConvidadoService, protected override readonly messageService: MessageService, protected override readonly loadingService: LoadingService,private route: ActivatedRoute, protected override readonly carroService: CarroService, protected override readonly router: Router){
    super(convidadoService,messageService,loadingService, carroService, router);
  }

  override ngOnInit(): void {
    this.ObterPorId();
  }

  ObterPorId(){
    this.loadingService.ativar();
    let id = this.route.snapshot.params['id'];
    this.convidadoService.ObterPorId(id).subscribe(
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
    let cor = this.form.value as ConvidadoModel;
    this.loadingService.ativar();

    this.convidadoService.Atualizar(cor).subscribe(
      {
        next: () =>{
          this.loadingService.desativar();
          this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        },
        error: () => this.loadingService.desativar()
      }
    )

  }

  PreencherForm(commonModel: ConvidadoModel){
    this.form.setValue({id: commonModel.id, nome: commonModel.nome, cpf:commonModel.cpf, sicap: commonModel.sicap});
    this.carrosSelecionados = commonModel.carros.map(x => x.id);
  }
}
