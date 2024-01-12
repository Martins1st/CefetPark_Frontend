import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { JwtService } from 'src/app/core/services/jwt.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  usuario: string;

  constructor(private readonly jwtService: JwtService, private readonly router: Router, private readonly messageService: MessageService) {

  }
  ngOnInit(): void {
    this.usuario = this.jwtService.obterNomeUsuario();
  }


  sair() {
    this.messageService.add({ severity: ESeverityMessage.SUCESSO, summary: "Logout", detail: "até logo" })

    this.jwtService.removerToken();
    this.router.navigate(["/auth/login"]);


  }

}
