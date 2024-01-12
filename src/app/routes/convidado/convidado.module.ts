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
import { ConvidadoRoutingModule } from "./convidado-routing.module";
import { ConvidadoListarComponent } from './convidado-listar/convidado-listar.component';
import { ConvidadoCadastrarComponent } from './convidado-cadastrar/convidado-cadastrar.component';
import { ConvidadoEditarComponent } from './convidado-editar/convidado-editar.component';
import { InputMaskModule } from "primeng/inputmask";
import { ConvidadoService } from "src/app/api/services/convidado.service";
import { MultiSelectModule } from "primeng/multiselect";
import { CarroService } from "src/app/api/services/carro.service";

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
    ConvidadoRoutingModule,
    InputMaskModule,
    MultiSelectModule,
    
  ],
  providers: [
    ConvidadoService,
    CarroService,
  ],
  declarations: [
    ConvidadoListarComponent,
       ConvidadoCadastrarComponent,
       ConvidadoEditarComponent
  ],
  exports: [

  ]
})
export class ConvidadoModule { }
