import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { JwtService } from '../services/jwt.service';

export const authGuard: CanActivateFn = (route, state) => {
  return VerificarToken();
};

export const authGuardLoad: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return VerificarToken();
};

function VerificarToken(){
  
  let router = inject(Router);
  let jwtService = inject(JwtService);
  let token = jwtService.obterToken();
    if (token == null || token == "") {
      router.navigate(["/auth/login"]);
      return false;
    }

    let ehValido = jwtService.ehValido();

    if (!ehValido) router.navigate(["/auth/login"]);

    return ehValido;
}


