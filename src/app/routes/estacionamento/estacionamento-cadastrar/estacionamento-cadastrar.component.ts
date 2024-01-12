import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { lastValueFrom } from 'rxjs';
import { EstacionamentoModel } from 'src/app/api/models/estacionamento.model';
import { EnderecoService } from 'src/app/api/services/endereco.service';
import { EstacionamentoService } from 'src/app/api/services/estacionamento.service';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { ECommonTitle } from 'src/app/core/enums/common-tittle.enum';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { GeoService } from 'src/app/core/services/geo.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-estacionamento-cadastrar',
  templateUrl: './estacionamento-cadastrar.component.html',
  styleUrls: ['./estacionamento-cadastrar.component.scss']
})
export class EstacionamentoCadastrarComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null, Validators.required),
    qtdVagasTotal: new FormControl(null, Validators.required),
    endereco: new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      numero: new FormControl(null, Validators.required),
      complemento: new FormControl(null),
      bairro: new FormControl(null, Validators.required),
      cep: new FormControl(null, Validators.required),
      tipoLogradouro: new FormControl(null, Validators.required),
      rua: new FormControl(null, Validators.required),
      latitude: new FormControl(null, Validators.required),
      longitude: new FormControl(null, Validators.required)
    })
  })

  function: ECommonFunction = ECommonFunction.SALVAR;
  title: ECommonTitle.CADASTRAR;

  constructor(protected readonly estacionamentoService: EstacionamentoService, protected readonly messageService: MessageService, protected readonly loadingService: LoadingService, protected readonly geoService: GeoService, protected readonly enderecoService: EnderecoService, protected readonly router: Router) {

  }

  ngOnInit(): void {
  }


  async Salvar() {
    this.loadingService.ativar();
    let request = this.form.value as EstacionamentoModel;
    request.qtdVagasTotal = 0;
    this.estacionamentoService.Cadastrar(request).subscribe(
      {
        next: (response) => {
          this.messageService.add({ severity: ESeverityMessage.SUCESSO, summary: "Tudo certo!", detail: "" })
          this.loadingService.desativar();
          setTimeout(() => {  
            this.router.navigate(["/estacionamento/listar"])
            }, 1500);
        },
        error: () => this.loadingService.desativar()
      }
    )
  }

  buscarCep(){
    this.loadingService.ativar();
    this.enderecoService.Obter(this.form.value.endereco.cep).subscribe(
      {
        next:(response) =>{
          if(response.address_components.length > 6){
            this.form.get("endereco.rua").setValue(response.address_components[2].long_name);
            this.form.get("endereco.bairro").setValue(response.address_components[3].long_name)
          }
          else{
            this.form.get("endereco.rua").setValue(response.address_components[1].long_name);
            this.form.get("endereco.bairro").setValue(response.address_components[2].long_name)
          }
          
          this.form.get("endereco.latitude").setValue(response.geometry.location.lat);
          this.form.get("endereco.longitude").setValue(response.geometry.location.lng);
          this.loadingService.desativar();
        },
        error: () => this.loadingService.desativar()
      }
    )
  }

}
