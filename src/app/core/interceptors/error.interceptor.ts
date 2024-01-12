import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { ESeverityMessage } from '../enums/severity-message.enum';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const unknown = 0;
    const internal_server_error = 500;
    return next.handle(request).pipe(catchError(error => {

      if(error instanceof HttpErrorResponse) {
        this.messageService.clear();
        if(error.status === unknown || error.status === internal_server_error ) {
            this.messageService.add({ severity: ESeverityMessage.ERRO, summary: 'Opss...', detail: 'Contate o Administrador do Sistema'});
        }
        else {
            let mensagensErro = error["error"]["erros"] as [];
            mensagensErro.forEach(msg =>
            this.messageService.add({ severity: ESeverityMessage.ERRO, summary: 'Ops...', detail: msg, life:3000}));
        }

      }
      return throwError(() => error);
    }));
  }
}
