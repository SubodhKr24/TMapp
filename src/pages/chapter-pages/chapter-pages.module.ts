import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChapterPagesPage } from './chapter-pages';

@NgModule({
  declarations: [
    ChapterPagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChapterPagesPage),
  ],
})
export class ChapterPagesPageModule {}
