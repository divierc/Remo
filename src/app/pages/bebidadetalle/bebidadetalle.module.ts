import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BebidadetallePage } from './bebidadetalle.page';

const routes: Routes = [
  {
    path: '',
    component: BebidadetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BebidadetallePage]
})
export class BebidadetallePageModule {}
