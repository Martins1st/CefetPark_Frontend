import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommonPath } from 'src/app/core/enums/common-path.enum';
import { ConvidadoCadastrarComponent } from './convidado-cadastrar/convidado-cadastrar.component';
import { ConvidadoEditarComponent } from './convidado-editar/convidado-editar.component';
import { ConvidadoListarComponent } from './convidado-listar/convidado-listar.component';


const routes: Routes = [
  { path: ECommonPath.CADASTRAR, component:ConvidadoCadastrarComponent},
  { path: ECommonPath.EDITAR, component:ConvidadoEditarComponent},
  { path: ECommonPath.LISTAR, component:ConvidadoListarComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class ConvidadoRoutingModule { }
