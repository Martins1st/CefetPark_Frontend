import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DepartamentoRoutingModule } from "./departamento-routing.module";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { PaginatorModule } from "primeng/paginator";
import { SharedModule } from "src/app/shared/shared.module";
import { DepartamentoService } from "src/app/api/services/departamento.service";
import { DepartamentoCadastrarComponent } from "./departamento-cadastrar/departamento-cadastrar.component";
import { DepartamentoEditarComponent } from "./departamento-editar/departamento-editar.component";
import { DepartamentoListarComponent } from "./departamento-listar/departamento-listar.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    DepartamentoRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    SharedModule
  ],
  providers: [
    DepartamentoService
  ],
  declarations: [
    DepartamentoCadastrarComponent,
    DepartamentoEditarComponent,
    DepartamentoListarComponent
  ],
  exports: [

  ]
})
export class DepartamentoModule { }
