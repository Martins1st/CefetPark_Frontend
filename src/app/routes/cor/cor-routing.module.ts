import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorCadastrarComponent } from './cor-cadastrar/cor-cadastrar.component';
import { ECommonPath } from 'src/app/core/enums/common-path.enum';
import { CorEditarComponent } from './cor-editar/cor-editar.component';
import { CorListarComponent } from './cor-listar/cor-listar.component';

const routes: Routes = [
  { path: ECommonPath.CADASTRAR, component:CorCadastrarComponent},
  { path: ECommonPath.EDITAR, component:CorEditarComponent},
  { path: ECommonPath.LISTAR, component:CorListarComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class CorRoutingModule { }
