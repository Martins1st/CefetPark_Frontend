import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { CarroModel } from 'src/app/api/models/carro.model';
import { CommonModel } from 'src/app/api/models/common.model';
import { CarroService } from 'src/app/api/services/carro.service';
import { ConvidadoService } from 'src/app/api/services/convidado.service';
import { CorService } from 'src/app/api/services/cor.service';
import { ModeloService } from 'src/app/api/services/modelo.service';
import { UsuarioService } from 'src/app/api/services/usuario.service';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { ECommonTitle } from 'src/app/core/enums/common-tittle.enum';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-carro-cadastrar',
  templateUrl: './carro-cadastrar.component.html',
  styleUrls: ['./carro-cadastrar.component.scss']
})
export class CarroCadastrarComponent implements OnInit {

  convidados: CommonModel[] = [];
  cores: CommonModel[] = [];
  modelos: CommonModel[] = [];
  usuarios: CommonModel[] = [];

  form = new FormGroup({
    id: new FormControl(null),
    placa: new FormControl(null, Validators.required),
    modelo_Id: new FormControl(null, Validators.required),
    cor_Id: new FormControl(null, Validators.required),
  })


  usuariosSelecionados = [];
  convidadosSelecionados = [];


  function = ECommonFunction.SALVAR;
  title: ECommonTitle = ECommonTitle.CADASTRAR;


  constructor(protected readonly carroService: CarroService, protected readonly usuarioService: UsuarioService,
    protected readonly messageService: MessageService, protected readonly loadingService: LoadingService,
    protected readonly convidadoService: ConvidadoService,
    protected readonly corService: CorService, protected readonly modeloService: ModeloService,
    protected readonly router: Router) {

  }

  ngOnInit(): void {
    this.obterDados();
  }

  obterDados() {
    this.loadingService.ativar();
  
    forkJoin([
      this.usuarioService.Obter(),
      this.corService.Obter(),
      this.modeloService.Obter(),
      this.convidadoService.Obter()
    ]).subscribe(
      ([usuarios, cores, modelos, convidados]) => {
        
        this.usuarios = usuarios;
        this.cores = cores;
        this.modelos = modelos;
        this.convidados = convidados;
        this.loadingService.desativar();
      },
      () => this.loadingService.desativar()
    );
  }


  ObterUsuarios() {
    this.usuarioService.Obter().subscribe(
      {
        next: (response) => {
          this.usuarios = response;
        }
      }
    )
  }

  ObterCores() {
    this.corService.Obter().subscribe(
      {
        next: (response) => {
          this.cores = response;

        }
      }
    )
  }

  ObterModelos() {
    this.modeloService.Obter().subscribe(
      {
        next: (response) => {
          this.modelos = response;
        }
      }
    )
  }

  ObterConvidados() {
    this.convidadoService.Obter().subscribe(
      {
        next: (response) => {
          this.convidados = response;
          this.loadingService.desativar();
        }
      }
    )
  }





  Salvar() {
    this.loadingService.ativar();
    let request = this.form.value as CarroModel;
    
    this.mapearArraysObj(request);
    this.carroService.Cadastrar(request).subscribe(
      ({
        next: (response) => {
          this.messageService.add({ severity: ESeverityMessage.SUCESSO, summary: "Tudo certo!", detail: "" })
          this.loadingService.desativar();
          setTimeout(() => {  
            this.router.navigate(["/usuario/listar"])
            }, 1500);
        },
        error: () => this.loadingService.desativar()
      })
    );
  }

  protected mapearArraysObj(carro: CarroModel){

    if(this.usuariosSelecionados == null) this.usuariosSelecionados = [];
    if(this.convidadosSelecionados == null) this.convidadosSelecionados = [];

    carro.usuarios = this.usuariosSelecionados.map(x => {let result = { id: x }; return result;}) as any;
    carro.convidados = this.convidadosSelecionados.map(x => {let result = { id: x }; return result;}) as any;
  }

}
