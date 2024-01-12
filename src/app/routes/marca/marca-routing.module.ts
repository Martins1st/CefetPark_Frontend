import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommonPath } from 'src/app/core/enums/common-path.enum';
import { MarcaListarComponent } from './marca-listar/marca-listar.component';
import { MarcaEditarComponent } from './marca-editar/marca-editar.component';
import { MarcaCadastrarComponent } from './marca-cadastrar/marca-cadastrar.component';

const routes: Routes = [
  { path: ECommonPath.CADASTRAR, component:MarcaCadastrarComponent},
  { path: ECommonPath.EDITAR, component:MarcaEditarComponent},
  { path: ECommonPath.LISTAR, component:MarcaListarComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class MarcaRoutingModule { }
