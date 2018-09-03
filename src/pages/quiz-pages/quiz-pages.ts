import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quiz-pages',
  templateUrl: 'quiz-pages.html',
})
export class QuizPagesPage {
  @ViewChild(Slides) slides:Slides;
  public chapterIcon;
  public chapterTitle;
  public QAset;
  ScoreSummary: any;
  scorePerQ: number;
  scoreNegativeA: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chapterIcon = navParams.get("chapterIcon");
    this.chapterTitle = navParams.get("chapterTitle");
    this.QAset = navParams.get("QAset");

    this.ScoreSummary = {
      totalQs: this.QAset.Qs.length,
      answersAttempted: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      scores: new Array<number>(this.QAset.Qs.length),
    }
    Array.apply(null, this.ScoreSummary.scores).map(Number.prototype.valueOf,0);
    this.scorePerQ = 10;
    this.scoreNegativeA = (-0.25)*this.scorePerQ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPagesPage');
  }

  optionSelected(option: string, index: number) {
    console.log("Selected Option for Question ", index, " is ", option);
    if(option == this.QAset.As[index]) {
      console.log('Answer is Correct!');
      this.ScoreSummary.answersAttempted += 1;
      this.ScoreSummary.correctAnswers += 1;
      this.ScoreSummary.scores[index] = this.scorePerQ;
    } else {
      console.log('Gaura! Answer is Wrong.');
      this.ScoreSummary.answersAttempted += 1;
      this.ScoreSummary.wrongAnswers += 1;
      this.ScoreSummary.scores[index] = this.scoreNegativeA;
    }

    if(index == this.QAset.Qs.length-1){
      this.optionFinishSelected(index);
    }
    //navigate to next question on select
    this.slides.slideTo(index+1 , 200);
  }
  optionFirstSelected(index: number) {
    console.log("Jump to First Question from Q#", index);
    //navigate to first question on select
    this.slides.slideTo(0 , 200);
  }
  optionPrevSelected(index: number) {
    console.log("Go to Previous Question from Q#", index);
    //navigate to prev question on select
    this.slides.slideTo(index-1 , 200);
  }
  optionNextSelected(index: number) {
    console.log("Go to Next Question from Q#", index);
    //navigate to next question on select
    this.slides.slideTo(index+1 , 200);
  }
  optionLastSelected(index: number) {
    console.log("Jump to Last Question from Q#", index);
    //navigate to last question on select
    this.slides.slideTo(this.QAset.Qs.length-1 , 200);
  }
  optionFinishSelected(index: number) {
    console.log("Finish Quiz from Q#", index);
    console.log(this.ScoreSummary);
    var totalScore = this.ScoreSummary.scores.reduce(function(acc, val) {return acc + val;});
    //finish quiz on select
    this.navCtrl.push('QuizOverPage',{chapterIcon: this.chapterIcon, chapterTitle: this.chapterTitle, ScoreSummary: this.ScoreSummary, totalScore: totalScore});
  }

}
