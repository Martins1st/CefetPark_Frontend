import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommonPath } from 'src/app/core/enums/common-path.enum';
import { ModeloCadastrarComponent } from './modelo-cadastrar/modelo-cadastrar.component';
import { ModeloEditarComponent } from './modelo-editar/modelo-editar.component';
import { ModeloListarComponent } from './modelo-listar/modelo-listar.component';

const routes: Routes = [
  { path: ECommonPath.CADASTRAR, component:ModeloCadastrarComponent},
  { path: ECommonPath.EDITAR, component:ModeloEditarComponent},
  { path: ECommonPath.LISTAR, component:ModeloListarComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class ModeloRoutingModule { }
