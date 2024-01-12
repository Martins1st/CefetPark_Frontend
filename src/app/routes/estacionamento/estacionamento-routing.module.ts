import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommonPath } from 'src/app/core/enums/common-path.enum';
import { EstacionamentoCadastrarComponent } from './estacionamento-cadastrar/estacionamento-cadastrar.component';
import { EstacionamentoEditarComponent } from './estacionamento-editar/estacionamento-editar.component';
import { EstacionamentoListarComponent } from './estacionamento-listar/estacionamento-listar.component';

const routes: Routes = [
  { path: ECommonPath.CADASTRAR, component:EstacionamentoCadastrarComponent},
  { path: ECommonPath.EDITAR, component:EstacionamentoEditarComponent},
  { path: ECommonPath.LISTAR, component:EstacionamentoListarComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class EstacionamentoRoutingModule { }
