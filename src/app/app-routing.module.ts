import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'comida', loadChildren: './pages/comida/comida.module#ComidaPageModule' },
  { path: 'bebida', loadChildren: './pages/bebida/bebida.module#BebidaPageModule' },
  { path: 'postre', loadChildren: './pages/postre/postre.module#PostrePageModule' },
  { path: 'login-admin', loadChildren: './pages/login-admin/login-admin.module#LoginAdminPageModule' },
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule' },
  { path: 'mesas', loadChildren: './pages/mesas/mesas.module#MesasPageModule' },
  { path: 'pedido-cocina', loadChildren: './pages/pedido-cocina/pedido-cocina.module#PedidoCocinaPageModule' },
  { path: 'pedido-mesa', loadChildren: './pages/pedido-mesa/pedido-mesa.module#PedidoMesaPageModule' },
  { path: 'comida-detalle', loadChildren: './pages/comida-detalle/comida-detalle.module#ComidaDetallePageModule' },
  { path: 'bebidas-detalle', loadChildren: './pages/bebidas-detalle/bebidas-detalle.module#BebidasDetallePageModule' },
  { path: 'caja', loadChildren: './pages/caja/caja.module#CajaPageModule' },
  { path: 'pedido-mesero', loadChildren: './pages/pedido-mesero/pedido-mesero.module#PedidoMeseroPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
