import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { PaginatorModule } from "primeng/paginator";
import { SharedModule } from "src/app/shared/shared.module";
import { DepartamentoService } from "src/app/api/services/departamento.service";
import { EstacionamentoService } from "src/app/api/services/estacionamento.service";
import { EstacionamentoRoutingModule } from "./estacionamento-routing.module";
import { EstacionamentoCadastrarComponent } from './estacionamento-cadastrar/estacionamento-cadastrar.component';
import { EstacionamentoEditarComponent } from './estacionamento-editar/estacionamento-editar.component';
import { EstacionamentoListarComponent } from './estacionamento-listar/estacionamento-listar.component';
import { InputNumberModule } from "primeng/inputnumber";
import {InputMaskModule } from "primeng/inputmask";
import { GeoService } from "src/app/core/services/geo.service";
import { EnderecoService } from "src/app/api/services/endereco.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    EstacionamentoRoutingModule,
    InputTextModule,
    InputNumberModule,
    InputMaskModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    SharedModule
  ],
  providers: [
    EstacionamentoService,
    GeoService,
    EnderecoService
  ],
  declarations: [
  
    EstacionamentoCadastrarComponent,
       EstacionamentoEditarComponent,
       EstacionamentoListarComponent
  ],
  exports: [

  ]
})
export class EstacionamentoModule { }
