import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CommonModel } from 'src/app/api/models/common.model';
import { MarcaService } from 'src/app/api/services/marca.service';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-marca-listar',
  templateUrl: './marca-listar.component.html',
  styleUrls: ['./marca-listar.component.scss']
})
export class MarcaListarComponent {
  idDeletar = null;

  marcas!: CommonModel[];
  constructor(private readonly marcaService: MarcaService, private readonly loadingService: LoadingService, private readonly messageService: MessageService) {

  }

  ngOnInit(): void {
    this.Obter();
  }

  Obter() {
    this.loadingService.ativar();
    this.marcaService.Obter().subscribe(
      {
        next: (response) => {
          this.marcas = response;
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
    this.marcaService.Deletar(this.idDeletar).subscribe({
      next: () => {
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        let indexParaDeletar = this.marcas.findIndex(x => x.id == this.idDeletar);
        this.marcas.splice(indexParaDeletar, 1);
        this.loadingService.desativar();
      },
      error: () => this.loadingService.desativar()
    })

  }

}
