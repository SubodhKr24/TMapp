import { NgModule } from '@angular/core';
import { SharedModule } from '../../app/shared.module';
import { IonicPageModule } from 'ionic-angular';
import { GuidelinesPage } from './guidelines';

@NgModule({
  declarations: [
    GuidelinesPage,
  ],
  imports: [
    IonicPageModule.forChild(GuidelinesPage),
    SharedModule
  ],
  exports: [
    GuidelinesPage
  ]
})
export class GuidelinesPageModule {}
