import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PedidoCocinaPage } from './pedido-cocina.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoCocinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PedidoCocinaPage]
})
export class PedidoCocinaPageModule {}
