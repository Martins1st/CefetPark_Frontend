import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConvidadoModel } from 'src/app/api/models/convidado.model';
import { ConvidadoService } from 'src/app/api/services/convidado.service';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-convidado-listar',
  templateUrl: './convidado-listar.component.html',
  styleUrls: ['./convidado-listar.component.scss']
})
export class ConvidadoListarComponent implements OnInit {

  idDeletar = null;

  convidados!: ConvidadoModel[];
  constructor(private readonly convidadoService: ConvidadoService, private readonly loadingService: LoadingService, private readonly messageService: MessageService) {

  }

  ngOnInit(): void {
    this.Obter();
  }

  Obter() {
    this.loadingService.ativar();
    this.convidadoService.Obter().subscribe(
      {
        next: (response) => {
          this.convidados = response;
          this.loadingService.desativar();
        },
        error: () => this.loadingService.desativar()
      }
    )
  }

  DeletarQuestion(id: number) {
    this.messageService.clear('confirm');
    this.idDeletar = id;
    this.messageService.add({ key: 'confirm', sticky: true, severity: 'warn', summary: 'Deseja deletar o Convidado de Id: ' + id });
  }

  Confirmar() {
    this.loadingService.ativar();
    this.convidadoService.Deletar(this.idDeletar).subscribe({
      next: () => {
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        let indexParaDeletar = this.convidados.findIndex(x => x.id == this.idDeletar);
        this.convidados.splice(indexParaDeletar, 1);
        this.loadingService.desativar();
      },
      error: () => this.loadingService.desativar()
    })

  }
}
