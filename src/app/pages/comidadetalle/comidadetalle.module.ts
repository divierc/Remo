import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComidadetallePage } from './comidadetalle.page';

const routes: Routes = [
  {
    path: '',
    component: ComidadetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComidadetallePage]
})
export class ComidadetallePageModule {}
