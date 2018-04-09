import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quiz-start',
  templateUrl: 'quiz-start.html',
})
export class QuizStartPage {

  first_name: string;
  last_name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.first_name = navParams.get("first_name");
  	this.last_name = navParams.get("last_name");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizStartPage');
  }

}
