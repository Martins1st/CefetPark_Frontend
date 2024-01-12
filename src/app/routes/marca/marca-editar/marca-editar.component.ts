import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/api/services/marca.service';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { MarcaCadastrarComponent } from '../marca-cadastrar/marca-cadastrar.component';
import { MessageService } from 'primeng/api';
import { CommonModel } from 'src/app/api/models/common.model';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-marca-editar',
  templateUrl: '../marca-cadastrar/marca-cadastrar.component.html',
  styleUrls: ['../marca-cadastrar/marca-cadastrar.component.scss']
})
export class MarcaEditarComponent extends MarcaCadastrarComponent implements OnInit {
  override function: ECommonFunction = ECommonFunction.ATUALIZAR;

  constructor(protected override readonly marcaService: MarcaService, protected override readonly messageService: MessageService, protected override readonly loadingService: LoadingService, private route: ActivatedRoute, protected override readonly router: Router){
    super(marcaService, messageService, loadingService, router)
  }

  override ngOnInit(): void {
    this.ObterPorId();
  }

  ObterPorId(){
    this.loadingService.ativar();
    let id = this.route.snapshot.params['id'];
    this.marcaService.ObterPorId(id).subscribe(
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

    this.marcaService.Atualizar(cor).subscribe(
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
