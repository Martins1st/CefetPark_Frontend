import { Component, OnInit } from '@angular/core';
import { CarroCadastrarComponent } from '../carro-cadastrar/carro-cadastrar.component';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { CarroService } from 'src/app/api/services/carro.service';
import { MessageService } from 'primeng/api';
import { ConvidadoService } from 'src/app/api/services/convidado.service';
import { CorService } from 'src/app/api/services/cor.service';
import { UsuarioService } from 'src/app/api/services/usuario.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ModeloService } from 'src/app/api/services/modelo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { CarroModel } from 'src/app/api/models/carro.model';
import { ECommonTitle } from 'src/app/core/enums/common-tittle.enum';

@Component({
  selector: 'app-carro-editar',
  templateUrl: '../carro-cadastrar/carro-cadastrar.component.html',
  styleUrls: ['../carro-cadastrar/carro-cadastrar.component.scss']
})
export class CarroEditarComponent extends CarroCadastrarComponent implements OnInit {


  override function = ECommonFunction.ATUALIZAR;
  override title: ECommonTitle = ECommonTitle.EDITAR;
    
  
  constructor(protected override readonly carroService: CarroService, protected override readonly usuarioService: UsuarioService,
    protected override readonly messageService: MessageService, protected override readonly loadingService: LoadingService,
    protected override readonly convidadoService: ConvidadoService,
    protected override readonly corService: CorService, protected override readonly modeloService: ModeloService, private readonly route: ActivatedRoute,
    protected override readonly router: Router) {
      super(carroService,usuarioService,messageService,loadingService,convidadoService, corService, modeloService, router);
  }


  override ngOnInit(): void {
    super.ngOnInit();
    this.ObterPorId();
  }

  ObterPorId(){
    this.loadingService.ativar();
    let id = this.route.snapshot.params['id'];
    this.carroService.ObterPorId(id).subscribe(
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
    let request = this.form.value as CarroModel;
    super.mapearArraysObj(request);
    this.loadingService.ativar();

    this.carroService.Atualizar(request).subscribe(
      {
        next: () =>{
          this.loadingService.desativar();
          this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        },
        error: () => this.loadingService.desativar()
      }
    )

  }

  PreencherForm(commonModel: CarroModel){
    this.form.setValue({ id: commonModel.id, placa: commonModel.placa, cor_Id: commonModel.cor_Id, modelo_Id: commonModel.modelo_Id } as CarroModel);
    this.convidadosSelecionados = commonModel.convidados.map(x => x.id);
    this.usuariosSelecionados = commonModel.usuarios.map(x => x.id);
  }
}
