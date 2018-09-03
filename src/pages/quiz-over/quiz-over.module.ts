import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizOverPage } from './quiz-over';

@NgModule({
  declarations: [
    QuizOverPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizOverPage),
  ],
})
export class QuizOverPageModule {}
