import { Injectable } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { JwtService } from "../services/jwt.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly jwtService: JwtService,
    private readonly router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headersConfig = {
      "Accept": "application/json",
    } as any;

    const token = this.jwtService.obterToken();

    if (token) headersConfig.Authorization = `Bearer ${token}`;

    const newRequest = request.clone({ setHeaders: headersConfig });

    return next.handle(newRequest).pipe(catchError(error => {
      const Unauthorized = 401;
      if (error instanceof HttpErrorResponse) {
        if (error.status == Unauthorized) {
            this.jwtService.removerToken();
            this.router.navigate(["/auth/login"]);
        } else {
          return throwError(() => error);
        }
      } else {
        return throwError(() => error);
      }
    }));
  }
}
