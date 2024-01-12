import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CorCadastrarComponent } from './cor-cadastrar/cor-cadastrar.component';
import { CorEditarComponent } from './cor-editar/cor-editar.component';
import { CorListarComponent } from './cor-listar/cor-listar.component';
import { CorRoutingModule } from "./cor-routing.module";
import { CorService } from "src/app/api/services/cor.service";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { PaginatorModule } from "primeng/paginator";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CorRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    SharedModule
  ],
  providers: [
    CorService
  ],
  declarations: [
    CorCadastrarComponent,
    CorEditarComponent,
    CorListarComponent
  ],
  exports: [

  ]
})
export class CorModule { }
