import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { lastValueFrom } from 'rxjs';
import { CommonModel } from 'src/app/api/models/common.model';
import { UsuarioModel } from 'src/app/api/models/usuario.model';
import { DepartamentoService } from 'src/app/api/services/departamento.service';
import { TipoUsuarioService } from 'src/app/api/services/tipo-usuario.service';
import { UsuarioService } from 'src/app/api/services/usuario.service';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { ECommonTitle } from 'src/app/core/enums/common-tittle.enum';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.scss']
})
export class UsuarioCadastrarComponent  implements OnInit {

  function: ECommonFunction = ECommonFunction.SALVAR;
  title: ECommonTitle = ECommonTitle.CADASTRAR;


  form = new FormGroup({
    id: new FormControl(null),
    cpf: new FormControl(null,Validators.required),
    matricula: new FormControl(null,Validators.required),
    nome: new FormControl(null,Validators.required),
    telefonePrincipal: new FormControl(null,Validators.required),
    telefoneSecundario: new FormControl(null),
    emailPrincipal: new FormControl(null,Validators.required),
    emailSecundario: new FormControl(null),
    departamento_Id: new FormControl(null,Validators.required),
    tipoUsuario_Id: new FormControl(null, Validators.required)
  })

  tiposUsuarios!: CommonModel[];

  departamentos!: CommonModel[];

  constructor(protected readonly usuarioService: UsuarioService, protected readonly messageService: MessageService, protected readonly loadingService: LoadingService, protected readonly tipoUsuarioService: TipoUsuarioService, protected readonly departamentoService: DepartamentoService, protected router: Router) {
    
  }

  ngOnInit(): void {
    this.ObterDepartamentos();
    this.ObterTiposUsuarios();
  }



  ObterTiposUsuarios(){
    this.tipoUsuarioService.Obter().subscribe({
      next:(response) =>{
        this.tiposUsuarios = response;
      }
    })
  }

  ObterDepartamentos(){
    this.departamentoService.Obter().subscribe(
      {
        next:(response) =>{
          this.departamentos = response;
        }
      }
    )
  }


  Salvar(){
    this.loadingService.ativar();
    let request = this.form.value as UsuarioModel;
    this.usuarioService.Cadastrar(request).subscribe({
      next: (response) =>{
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""});
        this.loadingService.desativar();
        setTimeout(() => {  
        this.router.navigate(["/usuario/listar"])
        }, 1500);
        
      },
      error: () => this.loadingService.desativar()
    })
  }

}
