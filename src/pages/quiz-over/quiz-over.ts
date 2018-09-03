import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quiz-over',
  templateUrl: 'quiz-over.html',
})
export class QuizOverPage {
  public chapterIcon;
  public chapterTitle;
  public ScoreSummary;
  public totalScore;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chapterIcon = navParams.get("chapterIcon");
    this.chapterTitle = navParams.get("chapterTitle");
    this.ScoreSummary = navParams.get("ScoreSummary");
    this.totalScore = navParams.get("totalScore");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizOverPage');
  }

  closeQuiz() {
    console.log("Closing the Quiz");
    //navigate to learning path page
    this.navCtrl.push('LearningPathPage');
  }

}
