import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CommonModel } from 'src/app/api/models/common.model';
import { CorService } from 'src/app/api/services/cor.service';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-cor-listar',
  templateUrl: './cor-listar.component.html',
  styleUrls: ['./cor-listar.component.scss']
})
export class CorListarComponent {

  idDeletar = null;

  cores!: CommonModel[];
  constructor(private readonly corService: CorService, private readonly loadingService: LoadingService, private readonly messageService: MessageService) {

  }

  ngOnInit(): void {
    this.Obter();
  }

  Obter() {
    this.loadingService.ativar();
    this.corService.Obter().subscribe(
      {
        next: (response) => {
          this.cores = response;
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
    this.corService.Deletar(this.idDeletar).subscribe({
      next: () => {
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        let indexParaDeletar = this.cores.findIndex(x => x.id == this.idDeletar);
        this.cores.splice(indexParaDeletar, 1);
        this.loadingService.desativar();
      },
      error: () => this.loadingService.desativar()
    })

  }


}
