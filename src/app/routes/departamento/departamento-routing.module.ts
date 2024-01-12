import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommonPath } from 'src/app/core/enums/common-path.enum';
import { DepartamentoCadastrarComponent } from './departamento-cadastrar/departamento-cadastrar.component';
import { DepartamentoEditarComponent } from './departamento-editar/departamento-editar.component';
import { DepartamentoListarComponent } from './departamento-listar/departamento-listar.component';

const routes: Routes = [
  { path: ECommonPath.CADASTRAR, component:DepartamentoCadastrarComponent},
  { path: ECommonPath.EDITAR, component:DepartamentoEditarComponent},
  { path: ECommonPath.LISTAR, component:DepartamentoListarComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class DepartamentoRoutingModule { }
