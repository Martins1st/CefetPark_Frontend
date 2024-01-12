import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonModel } from 'src/app/api/models/common.model';
import { ConvidadoModel } from 'src/app/api/models/convidado.model';
import { CarroService } from 'src/app/api/services/carro.service';
import { ConvidadoService } from 'src/app/api/services/convidado.service';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { ECommonTitle } from 'src/app/core/enums/common-tittle.enum';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-convidado-cadastrar',
  templateUrl: './convidado-cadastrar.component.html',
  styleUrls: ['./convidado-cadastrar.component.scss']
})
export class ConvidadoCadastrarComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null, Validators.required),
    cpf: new FormControl(null, Validators.required),
    sicap: new FormControl(null, Validators.required)
  })


  title = ECommonTitle.CADASTRAR;
  function = ECommonFunction.SALVAR;

  carros: CommonModel[] = [];
  carrosSelecionados = [];

  constructor(protected readonly convidadoService: ConvidadoService, protected readonly messageService: MessageService, protected readonly loadingService: LoadingService, protected readonly carroService: CarroService, protected readonly router: Router){

  }

  ngOnInit(): void {
    this.ObterCarros();
  }


  Salvar(){
    this.loadingService.ativar();
    let convidado = this.form.value as ConvidadoModel;
    this.mapearArraysObj(convidado);
    this.convidadoService.Cadastrar(convidado).subscribe({
      next: (response) =>{
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        this.loadingService.desativar();
        setTimeout(() => {  
          this.router.navigate(["/carro/listar"])
          }, 1500);
      },
      error: () => this.loadingService.desativar()
    })
  }

  ObterCarros() {
    this.loadingService.ativar();
    this.carroService.Obter().subscribe(
      {
        next: (response) => {
          console.log(response);
          this.carros = response as any;
          this.loadingService.desativar();
        },
        error: () => this.loadingService.desativar()
      }
    )
  }

  protected mapearArraysObj(convidado: ConvidadoModel){

    if(this.carrosSelecionados == null) this.carrosSelecionados = [];

    convidado.carros = this.carrosSelecionados.map(x => {let result = { id: x }; return result;}) as any;
  }



}
