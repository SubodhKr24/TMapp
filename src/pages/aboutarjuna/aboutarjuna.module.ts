import { NgModule } from '@angular/core';
import { SharedModule } from '../../app/shared.module';
import { IonicPageModule } from 'ionic-angular';
import { AboutArjunaPage } from './aboutarjuna';

@NgModule({
  declarations: [
    AboutArjunaPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutArjunaPage),
    SharedModule
  ],
  exports: [
    AboutArjunaPage
  ]
})
export class AboutArjunaPageModule {}
