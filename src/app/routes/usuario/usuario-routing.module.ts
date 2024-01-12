import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommonPath } from 'src/app/core/enums/common-path.enum';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';


const routes: Routes = [
  { path: ECommonPath.CADASTRAR, component:UsuarioCadastrarComponent},
  { path: ECommonPath.EDITAR, component:UsuarioEditarComponent},
  { path: ECommonPath.LISTAR, component:UsuarioListarComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class UsuarioRoutingModule { }
