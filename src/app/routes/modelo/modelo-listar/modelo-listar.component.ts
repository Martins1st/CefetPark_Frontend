import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ModeloModel } from 'src/app/api/models/modelo.model';
import { ModeloService } from 'src/app/api/services/modelo.service';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-modelo-listar',
  templateUrl: './modelo-listar.component.html',
  styleUrls: ['./modelo-listar.component.scss']
})
export class ModeloListarComponent {
  idDeletar = null;

  modelos!: ModeloModel[];
  constructor(private readonly modeloService: ModeloService, private readonly loadingService: LoadingService, private readonly messageService: MessageService) {

  }

  ngOnInit(): void {
    this.Obter();
  }

  Obter() {
    this.loadingService.ativar();
    this.modeloService.Obter().subscribe(
      {
        next: (response) => {
          this.modelos = response;
          this.loadingService.desativar();
        },
        error: () => this.loadingService.desativar()
      }
    )
  }

  DeletarQuestion(id: number) {
    this.messageService.clear('confirm');
    this.idDeletar = id;
    this.messageService.add({ key: 'confirm', sticky: true, severity: 'warn', summary: 'Deseja deletar a cor de id: ' + id });
  }

  Confirmar() {
    this.loadingService.ativar();
    this.modeloService.Deletar(this.idDeletar).subscribe({
      next: () => {
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        let indexParaDeletar = this.modelos.findIndex(x => x.id == this.idDeletar);
        this.modelos.splice(indexParaDeletar, 1);
        this.loadingService.desativar();
      },
      error: () => this.loadingService.desativar()
    })

  }

}
