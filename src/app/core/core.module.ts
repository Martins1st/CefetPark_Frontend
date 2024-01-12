import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";


const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];

@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[],
  providers: [httpInterceptorProviders]
})
export class CoreModule { }
