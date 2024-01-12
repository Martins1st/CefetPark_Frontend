import { Component, OnInit } from '@angular/core';
import { ModeloModel } from 'src/app/api/models/modelo.model';
import { ModeloCadastrarComponent } from '../modelo-cadastrar/modelo-cadastrar.component';
import { MessageService } from 'primeng/api';
import { ModeloService } from 'src/app/api/services/modelo.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from 'src/app/api/services/marca.service';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { ECommonTitle } from 'src/app/core/enums/common-tittle.enum';

@Component({
  selector: 'app-modelo-editar',
  templateUrl: '../modelo-cadastrar/modelo-cadastrar.component.html',
  styleUrls: ['../modelo-cadastrar/modelo-cadastrar.component.scss']
})
export class ModeloEditarComponent extends ModeloCadastrarComponent implements OnInit{

  override function: ECommonFunction = ECommonFunction.ATUALIZAR;
  
  override title: ECommonTitle = ECommonTitle.EDITAR;

  constructor(protected override readonly modeloService: ModeloService, protected override readonly messageService: MessageService, protected override readonly loadingService: LoadingService, private readonly route: ActivatedRoute, protected override readonly marcaService: MarcaService, protected override readonly router: Router){
    super(modeloService, messageService, loadingService, marcaService, router)
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.ObterPorId();
  }

  ObterPorId(){
    this.loadingService.ativar();
    let id = this.route.snapshot.params['id'];
    this.modeloService.ObterPorId(id).subscribe(
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
    let modelo = this.form.value as ModeloModel;
    this.loadingService.ativar();

    this.modeloService.Atualizar(modelo).subscribe(
      {
        next: () =>{
          this.loadingService.desativar();
          this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        },
        error: () => this.loadingService.desativar()
      }
    )

  }

  PreencherForm(commonModel: ModeloModel){
    this.form.setValue({id: commonModel.id, nome: commonModel.nome, marca_Id: commonModel.marca.id});
  }
}
