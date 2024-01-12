import { Component, OnInit } from '@angular/core';
import { EstacionamentoCadastrarComponent } from '../estacionamento-cadastrar/estacionamento-cadastrar.component';
import { EstacionamentoModel } from 'src/app/api/models/estacionamento.model';
import { EstacionamentoService } from 'src/app/api/services/estacionamento.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { GeoService } from 'src/app/core/services/geo.service';
import { lastValueFrom } from 'rxjs';
import { EnderecoService } from 'src/app/api/services/endereco.service';

@Component({
  selector: 'app-estacionamento-editar',
  templateUrl: '../estacionamento-cadastrar/estacionamento-cadastrar.component.html',
  styleUrls: ['../estacionamento-cadastrar/estacionamento-cadastrar.component.scss']
})
export class EstacionamentoEditarComponent extends EstacionamentoCadastrarComponent implements OnInit {




  override function: ECommonFunction = ECommonFunction.ATUALIZAR;

  constructor(protected override readonly estacionamentoService: EstacionamentoService, protected override readonly messageService: MessageService, protected override readonly loadingService: LoadingService, private readonly route: ActivatedRoute, protected override readonly geoService: GeoService, protected override readonly enderecoService: EnderecoService, protected override router: Router) {
    super(estacionamentoService, messageService, loadingService, geoService, enderecoService, router)
  }

  override ngOnInit(): void {
    this.ObterPorId();
  }

  ObterPorId() {
    this.loadingService.ativar();
    let id = this.route.snapshot.params['id'];
    this.estacionamentoService.ObterPorId(id).subscribe(
      {
        next: (response) => {
          this.loadingService.desativar();
          this.PreencherForm(response);
          console.log(this.form.value)
        },
        error: () => this.loadingService.desativar()
      }
    )
  }

  override async Salvar() {
    let request = this.form.value as EstacionamentoModel;
    this.loadingService.ativar();

    this.estacionamentoService.Atualizar(request).subscribe(
      {
        next: () => {
          this.loadingService.desativar();
          this.messageService.add({ severity: ESeverityMessage.SUCESSO, summary: "Tudo certo!", detail: "" })
        },
        error: () => this.loadingService.desativar()
      }
    )

  }

  PreencherForm(commonModel: EstacionamentoModel) {
    this.form.setValue({
      id: commonModel.id, nome: commonModel.nome, qtdVagasTotal: commonModel.qtdVagasTotal,
      endereco: {
        id: commonModel.endereco.id,
        nome: commonModel.endereco.nome,
        bairro: commonModel.endereco.bairro,
        tipoLogradouro: commonModel.endereco.tipoLogradouro,
        cep: commonModel.endereco.cep,
        complemento: commonModel.endereco.complemento,
        numero: commonModel.endereco.numero,
        rua: commonModel.endereco.rua,
        latitude: commonModel.endereco.latitude,
        longitude: commonModel.endereco.longitude
      }
    });
  }
}
