import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  cardItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardItems = [
      {
        username:'Shashank Pr',
        date: 'November 5, 2017',
        question: 'Hari bol',
        answers: ['Chant Hare Krishna and be happy...', 'Hari Hari'],
        answeredby: ['Jayanth Pr','Myself']
      },
      {
        username:'Brajesh Pr',
        date: 'November 6, 2017',
        question: 'Hari bol',
        answers: ['Chant Hare Krishna and be happy...'],
        answeredby: ['Jayanth Pr']
      },
      {
        username:'Srichand Pr',
        date: 'November 15, 2017',
        question: 'Hari bol',
        answers: ['Chant Hare Krishna and be happy...'],
        answeredby: ['Jayanth Pr']
      },
      {
        username:'Gireesh Pr',
        date: 'November 23, 2017',
        question: 'Hari bol',
        answers: ['Chant Hare Krishna and be happy...','Hari Hari'],
        answeredby: ['Jayanth Pr', 'Myself']
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

}
