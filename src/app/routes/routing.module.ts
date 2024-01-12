import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard, authGuardLoad } from '../core/security/auth.guard';
import { LayoutComponent } from "../layout/layout.component";
import { NotfoundComponent } from "../shared/pages/notfound/notfound.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo:"usuario/listar"
  },
  {
    path: "cor",
    loadChildren: () => import("./cor/cor.module").then(module => module.CorModule),
    canActivate: [authGuard],
    canMatch: [authGuardLoad],
    component: LayoutComponent,
  },
  {
    path: "marca",
    loadChildren: () => import("./marca/marca.module").then(module => module.MarcaModule),
    canActivate: [authGuard],
    canMatch: [authGuardLoad],
    component: LayoutComponent,
  },
  {
    path: "departamento",
    loadChildren: () => import("./departamento/departamento.module").then(module => module.DepartamentoModule),
    canActivate: [authGuard],
    canMatch: [authGuardLoad],
    component: LayoutComponent,
  },
  {
    path: "estacionamento",
    loadChildren: () => import("./estacionamento/estacionamento.module").then(module => module.EstacionamentoModule),
    canActivate: [authGuard],
    canMatch: [authGuardLoad],
    component: LayoutComponent,
  },
  {
    path: "modelo",
    loadChildren: () => import("./modelo/modelo.module").then(module => module.ModeloModule),
    canActivate: [authGuard],
    canMatch: [authGuardLoad],
    component: LayoutComponent,
  },
  {
    path: "convidado",
    loadChildren: () => import("./convidado/convidado.module").then(module => module.ConvidadoModule),
    canActivate: [authGuard],
    canMatch: [authGuardLoad],
    component: LayoutComponent,
  },
  {
    path: "usuario",
    loadChildren: () => import("./usuario/usuario.module").then(module => module.UsuarioModule),
    canActivate: [authGuard],
    canMatch: [authGuardLoad],
    component: LayoutComponent,
  },
  {
    path: "carro",
    loadChildren: () => import("./carro/carro.module").then(module => module.CarroModule),
    canActivate: [authGuard],
    canMatch: [authGuardLoad],
    component: LayoutComponent,
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(module => module.AuthModule),
  },
  {
    path: "**",
    pathMatch: "full",
    component: NotfoundComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
