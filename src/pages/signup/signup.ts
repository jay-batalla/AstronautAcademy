import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuizStartPage } from '../quiz-start/quiz-start'

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  first_name: string;
  last_name: string;
  email: string;
  password: string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.password = navParams.get('password');
  	this.email = navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  signUp() {
  	this.navCtrl.setRoot(QuizStartPage, {
      first_name: this.first_name,
      last_name: this.last_name
    });
  }

}
