import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chapter-pages',
  templateUrl: 'chapter-pages.html',
})
export class ChapterPagesPage {
  public dataItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataItem = navParams.get("dataItem");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterPagesPage');
  }

  openQuiz(chapterIcon, chapterTitle, QAset) {
    console.log(chapterTitle);
    console.log(QAset);
    this.navCtrl.push('QuizPagesPage',{chapterIcon: chapterIcon, chapterTitle: chapterTitle, QAset: QAset});
  }

}
