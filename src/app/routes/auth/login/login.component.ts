import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { firstValueFrom } from 'rxjs';
import { LoginModel } from 'src/app/api/models/login.model';
import { AuthService } from 'src/app/api/services/auth.service';
import { ESeverityMessage } from 'src/app/core/enums/severity-message.enum';
import { UserRole } from 'src/app/core/enums/user-role.enum';
import { JwtService } from 'src/app/core/services/jwt.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form = new FormGroup({
    "login": new FormControl(null, Validators.required),
    "senha":new FormControl(null, Validators.required)
  });
  

  constructor(private readonly authService: AuthService,
     private readonly messageService: MessageService,
      private readonly jwtService: JwtService,
      private readonly router: Router,
      private readonly loadingService: LoadingService){
    
  }
  
  ngOnInit(): void {
    document.body.style.backgroundColor = '#0a3d72';
  }

  async login(){
    this.loadingService.ativar();
    let login = this.form.value as LoginModel;
    this.authService.Login(login).subscribe(
      {
        next: (v) => {
          this.jwtService.salvarToken(v["data"]["token"]);

          if(this.jwtService.obterRole() != UserRole.ADM){
            this.jwtService.removerToken();
            this.loadingService.desativar();
            this.messageService.add({severity:ESeverityMessage.ERRO, summary:"Ops...", detail:"Acesso não autorizado!", life:3000})
            
            return;
          }
          
          this.loadingService.desativar();
          this.messageService.add({severity:ESeverityMessage.SUCESSO, summary:"Login efetuado!", detail:"você será redirecionado em breve.", life:3000})
          setTimeout(() => {
            this.router.navigate(["usuario/listar"])
            document.body.style.backgroundColor = '';
          }
            ,1000)
        },
        error: (e) => {
          this.loadingService.desativar();
          console.log(e);
        }
      }
    )

    
  }

}
