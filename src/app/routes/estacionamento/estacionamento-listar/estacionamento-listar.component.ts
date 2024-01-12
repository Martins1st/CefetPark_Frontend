import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EstacionamentoModel } from 'src/app/api/models/estacionamento.model';
import { EstacionamentoService } from 'src/app/api/services/estacionamento.service';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-estacionamento-listar',
  templateUrl: './estacionamento-listar.component.html',
  styleUrls: ['./estacionamento-listar.component.scss']
})
export class EstacionamentoListarComponent implements OnInit {

  estacionamentos!: EstacionamentoModel[];
  idDeletar = null;
  constructor(private readonly estacionamentoService: EstacionamentoService, private readonly messageService: MessageService, private readonly loadingService: LoadingService){

  }

  ngOnInit(): void {
    this.ObterEstacionamentos();

  }


  ObterEstacionamentos(){
    this.loadingService.ativar();
    this.estacionamentoService.Obter().subscribe(
      {
        next:(response) =>{
          this.estacionamentos = response;
          this.loadingService.desativar();
        },
        error: () => this.loadingService.desativar()
      }
    )
  }

  DeletarQuestion(id: number) {
    this.messageService.clear('confirm');
    this.idDeletar = id;
    this.messageService.add({ key: 'confirm', sticky: true, severity: 'warn', summary: 'Deseja deletar o estacionamento de id: ' + id });
  }

  Confirmar() {
    this.loadingService.ativar();
    this.estacionamentoService.Deletar(this.idDeletar).subscribe({
      next: () => {
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        let indexParaDeletar = this.estacionamentos.findIndex(x => x.id == this.idDeletar);
        this.estacionamentos.splice(indexParaDeletar, 1);
        this.loadingService.desativar();
      },
      error: () => this.loadingService.desativar()
    })

  }

}
