import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsuarioModel } from 'src/app/api/models/usuario.model';
import { UsuarioService } from 'src/app/api/services/usuario.service';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss']
})
export class UsuarioListarComponent implements OnInit {
  idDeletar = null;

  usuarios!: UsuarioModel[];
  constructor(private readonly usuarioService: UsuarioService, private readonly loadingService: LoadingService, private readonly messageService: MessageService) {

  }

  ngOnInit(): void {
    this.Obter();
  }

  Obter() {
    this.loadingService.ativar();
    this.usuarioService.Obter().subscribe(
      {
        next: (response) => {
          this.usuarios = response;
          this.loadingService.desativar();
        },
        error: () => this.loadingService.desativar()
      }
    )
  }

  DeletarQuestion(id: number) {
    this.messageService.clear('confirm');
    this.idDeletar = id;
    this.messageService.add({ key: 'confirm', sticky: true, severity: 'warn', summary: 'Deseja deletar o Usuario de Id: ' + id });
  }

  Confirmar() {
    this.loadingService.ativar();
    this.usuarioService.Deletar(this.idDeletar).subscribe({
      next: () => {
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        let indexParaDeletar = this.usuarios.findIndex(x => x.id == this.idDeletar);
        this.usuarios.splice(indexParaDeletar, 1);
        this.loadingService.desativar();
      },
      error: () => this.loadingService.desativar()
    })

  }
}
