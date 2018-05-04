import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

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
  username: string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController ) {
  	this.password = navParams.get('password');
  	this.email = navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  signUpLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Creating your profile, cadet. Please wait...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.setRoot(QuizStartPage, {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        username: this.username
      });
    }, 2000);

    setTimeout (() => {
      loading.dismiss();
    }, 2000);
  }
}
