import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CarroModel } from 'src/app/api/models/carro.model';
import { CommonModel } from 'src/app/api/models/common.model';
import { CarroService } from 'src/app/api/services/carro.service';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-carro-listar',
  templateUrl: './carro-listar.component.html',
  styleUrls: ['./carro-listar.component.scss']
})
export class CarroListarComponent implements OnInit{

  idDeletar = null;

  carros!: CarroModel[];


  constructor(private readonly carroService: CarroService, private readonly loadingService: LoadingService, private readonly messageService: MessageService){

  }

  ngOnInit(): void {
    this.Obter();
  }



  Obter() {
    this.loadingService.ativar();
    this.carroService.Obter().subscribe(
      {
        next: (response) => {
          this.carros = response;
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
    this.carroService.Deletar(this.idDeletar).subscribe({
      next: () => {
        this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Tudo certo!",detail:""})
        let indexParaDeletar = this.carros.findIndex(x => x.id == this.idDeletar);
        this.carros.splice(indexParaDeletar, 1);
        this.loadingService.desativar();
      },
      error: () => this.loadingService.desativar()
    })

  }

}
