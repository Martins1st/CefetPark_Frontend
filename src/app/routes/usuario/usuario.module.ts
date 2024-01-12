import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CorService } from "src/app/api/services/cor.service";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { PaginatorModule } from "primeng/paginator";
import { SharedModule } from "src/app/shared/shared.module";
import { DropdownModule } from "primeng/dropdown";
import { MarcaService } from "src/app/api/services/marca.service";
import { UsuarioRoutingModule } from "./usuario-routing.module";
import { ModeloService } from "src/app/api/services/modelo.service";
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { DepartamentoService } from "src/app/api/services/departamento.service";
import { TipoUsuarioService } from "src/app/api/services/tipo-usuario.service";
import { UsuarioService } from "src/app/api/services/usuario.service";
import { InputMaskModule } from "primeng/inputmask";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    SharedModule,
    DropdownModule,
    InputMaskModule,
    UsuarioRoutingModule
  ],
  providers: [
    DepartamentoService,
    TipoUsuarioService,
    UsuarioService
  ],
  declarations: [
  
    UsuarioListarComponent,
       UsuarioCadastrarComponent,
       UsuarioEditarComponent
  ],
  exports: [

  ]
})
export class UsuarioModule { }
