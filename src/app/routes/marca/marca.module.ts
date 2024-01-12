import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MarcaRoutingModule } from "./marca-routing.module";
import { CorService } from "src/app/api/services/cor.service";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { PaginatorModule } from "primeng/paginator";
import { SharedModule } from "src/app/shared/shared.module";
import { MarcaListarComponent } from './marca-listar/marca-listar.component';
import { MarcaCadastrarComponent } from './marca-cadastrar/marca-cadastrar.component';
import { MarcaEditarComponent } from './marca-editar/marca-editar.component';
import { MarcaService } from "src/app/api/services/marca.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MarcaRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    SharedModule
  ],
  providers: [
    MarcaService
  ],
  declarations: [
  
    MarcaListarComponent,
       MarcaCadastrarComponent,
       MarcaEditarComponent
  ],
  exports: [

  ]
})
export class MarcaModule { }
