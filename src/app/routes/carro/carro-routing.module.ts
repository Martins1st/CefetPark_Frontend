import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommonPath } from 'src/app/core/enums/common-path.enum';
import { CarroCadastrarComponent } from './carro-cadastrar/carro-cadastrar.component';
import { CarroEditarComponent } from './carro-editar/carro-editar.component';
import { CarroListarComponent } from './carro-listar/carro-listar.component';


const routes: Routes = [
  { path: ECommonPath.CADASTRAR, component:CarroCadastrarComponent},
  { path: ECommonPath.EDITAR, component:CarroEditarComponent},
  { path: ECommonPath.LISTAR, component:CarroListarComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class CarroRoutingModule { }
