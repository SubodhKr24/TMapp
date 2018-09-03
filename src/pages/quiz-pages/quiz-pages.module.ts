import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizPagesPage } from './quiz-pages';

@NgModule({
  declarations: [
    QuizPagesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizPagesPage),
  ],
})
export class QuizPagesPageModule {}
