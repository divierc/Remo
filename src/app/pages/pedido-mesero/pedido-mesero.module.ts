import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PedidoMeseroPage } from './pedido-mesero.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoMeseroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PedidoMeseroPage]
})
export class PedidoMeseroPageModule {}
