import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonModel } from 'src/app/api/models/common.model';
import { ModeloModel } from 'src/app/api/models/modelo.model';
import { MarcaService } from 'src/app/api/services/marca.service';
import { ModeloService } from 'src/app/api/services/modelo.service';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { ECommonTitle } from 'src/app/core/enums/common-tittle.enum';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-modelo-cadastrar',
  templateUrl: './modelo-cadastrar.component.html',
  styleUrls: ['./modelo-cadastrar.component.scss']
})
export class ModeloCadastrarComponent {

  marcas: CommonModel[];

  form = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null, Validators.required),
    marca_Id: new FormControl(null, Validators.required)
  })



  function = ECommonFunction.SALVAR;
  title: ECommonTitle = ECommonTitle.CADASTRAR;

  constructor(protected readonly modeloService: ModeloService, protected readonly messageService: MessageService, protected readonly loadingService: LoadingService, protected readonly marcaService: MarcaService, protected readonly router: Router){

  }
  
  ngOnInit(): void {
    this.ObterMarcas();
  }


  Salvar(){
    this.loadingService.ativar();
    let cor = this.form.value as ModeloModel;
    
    this.modeloService.Cadastrar(cor).subscribe({
      next: (response) =>{
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        this.loadingService.desativar();
        setTimeout(() => {  
          this.router.navigate(["/modelo/listar"])
          }, 1500);
      },
      error: () => this.loadingService.desativar()
    })
  }

  ObterMarcas(){
    this.marcaService.Obter().subscribe(
      {
        next:(response) => {
          this.marcas = response;
          this.loadingService.desativar();
        },
        error: () => this.loadingService.desativar()
      }
    )
  }
}
