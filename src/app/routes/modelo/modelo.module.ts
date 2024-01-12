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
import { ModeloListarComponent } from './modelo-listar/modelo-listar.component';
import { ModeloCadastrarComponent } from './modelo-cadastrar/modelo-cadastrar.component';
import { ModeloEditarComponent } from './modelo-editar/modelo-editar.component';
import { DropdownModule } from "primeng/dropdown";
import { MarcaService } from "src/app/api/services/marca.service";
import { ModeloRoutingModule } from "./modelo-routing.module";
import { ModeloService } from "src/app/api/services/modelo.service";

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
    ModeloRoutingModule
  ],
  providers: [
    MarcaService,
    ModeloService
  ],
  declarations: [
    ModeloListarComponent,
       ModeloCadastrarComponent,
       ModeloEditarComponent
  ],
  exports: [

  ]
})
export class ModeloModule { }
