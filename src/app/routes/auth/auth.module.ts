import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import {Button, ButtonModule } from 'primeng/button';
import { AuthService } from "src/app/api/services/auth.service";
import {ToastModule} from 'primeng/toast';
import { PasswordModule } from 'primeng/password';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ButtonModule
    
  ],
  providers: [
    AuthService
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [

  ]
})
export class AuthModule { }
