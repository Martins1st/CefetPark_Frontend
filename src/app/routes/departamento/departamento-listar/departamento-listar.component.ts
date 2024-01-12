import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CommonModel } from 'src/app/api/models/common.model';
import { DepartamentoService } from 'src/app/api/services/departamento.service';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-departamento-listar',
  templateUrl: './departamento-listar.component.html',
  styleUrls: ['./departamento-listar.component.scss']
})
export class DepartamentoListarComponent {
  idDeletar = null;

  departamentos!: CommonModel[];
  constructor(private readonly departamentoService: DepartamentoService, private readonly loadingService: LoadingService, private readonly messageService: MessageService) {

  }

  ngOnInit(): void {
    this.Obter();
  }

  Obter() {
    this.loadingService.ativar();
    this.departamentoService.Obter().subscribe(
      {
        next: (response) => {
          this.departamentos = response;
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
    this.departamentoService.Deletar(this.idDeletar).subscribe({
      next: () => {
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        let indexParaDeletar = this.departamentos.findIndex(x => x.id == this.idDeletar);
        this.departamentos.splice(indexParaDeletar, 1);
        this.loadingService.desativar();
      },
      error: () => this.loadingService.desativar()
    })

  }
}
