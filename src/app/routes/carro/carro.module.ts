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
import { ModeloService } from "src/app/api/services/modelo.service";
import { CarroRoutingModule } from "./carro-routing.module";
import { CarroListarComponent } from './carro-listar/carro-listar.component';
import { CarroCadastrarComponent } from './carro-cadastrar/carro-cadastrar.component';
import { CarroEditarComponent } from './carro-editar/carro-editar.component';
import { CarroService } from "src/app/api/services/carro.service";
import { UsuarioService } from "src/app/api/services/usuario.service";
import { ConvidadoService } from "src/app/api/services/convidado.service";
import { MultiSelectModule } from 'primeng/multiselect';
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
    CarroRoutingModule,
    MultiSelectModule
  ],
  providers: [
    CorService,
    ModeloService,
    CarroService,
    UsuarioService,
    ConvidadoService,
  ],
  declarations: [
  
    CarroListarComponent,
       CarroCadastrarComponent,
       CarroEditarComponent
  ],
  exports: [

  ]
})
export class CarroModule { }
