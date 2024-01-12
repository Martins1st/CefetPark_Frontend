import { Component } from '@angular/core';
import { UsuarioCadastrarComponent } from '../usuario-cadastrar/usuario-cadastrar.component';
import { ECommonFunction } from 'src/app/core/enums/common-function.enum';
import { UsuarioService } from 'src/app/api/services/usuario.service';
import { MessageService } from 'primeng/api';
import { TipoUsuarioService } from 'src/app/api/services/tipo-usuario.service';
import { DepartamentoService } from 'src/app/api/services/departamento.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { UsuarioModel } from 'src/app/api/models/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ECommonTitle } from 'src/app/core/enums/common-tittle.enum';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: '../usuario-cadastrar/usuario-cadastrar.component.html',
  styleUrls: ['../usuario-cadastrar/usuario-cadastrar.component.scss']
})
export class UsuarioEditarComponent extends UsuarioCadastrarComponent {
  override function: ECommonFunction = ECommonFunction.ATUALIZAR;
  override title: ECommonTitle= ECommonTitle.EDITAR;

  constructor(protected override readonly usuarioService: UsuarioService, protected override readonly messageService: MessageService, protected override readonly loadingService: LoadingService, protected override readonly tipoUsuarioService: TipoUsuarioService, protected override readonly departamentoService: DepartamentoService, private readonly route: ActivatedRoute, protected override readonly router: Router) {
    super(usuarioService, messageService, loadingService, tipoUsuarioService, departamentoService,router);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.ObterPorId();
  }

  ObterPorId() {
    this.loadingService.ativar();
    let id = this.route.snapshot.params['id'];
    this.usuarioService.ObterPorId(id).subscribe(
      {
        next: (response) => {
          this.loadingService.desativar();
          this.PreencherForm(response);
        },
        error: () => this.loadingService.desativar()
      }
    )
  }

  override Salvar() {
    let modelo = this.form.value as UsuarioModel;
    this.loadingService.ativar();

    this.usuarioService.Atualizar(modelo).subscribe(
      {
        next: () => {
          this.loadingService.desativar();
          this.messageService.add({ severity: ESeverityMessage.SUCESSO, summary: "Tudo certo!", detail: "" })
        },
        error: () => this.loadingService.desativar()
      }
    )

  }

  PreencherForm(commonModel: UsuarioModel) {
    this.form.setValue({
      id: commonModel.id,
      nome: commonModel.nome,
      cpf: commonModel.cpf,
      departamento_Id: commonModel.departamento.id,
      matricula: commonModel.matricula,
      emailPrincipal: commonModel.emailPrincipal,
      emailSecundario: commonModel.emailSecundario,
      telefonePrincipal: commonModel.telefonePrincipal,
      telefoneSecundario: commonModel.telefoneSecundario,
      tipoUsuario_Id: commonModel.tipoUsuario.id,
    });
  }

}
