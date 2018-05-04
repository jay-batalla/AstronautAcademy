import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the QuizEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz-end',
  templateUrl: 'quiz-end.html',
})
export class QuizEndPage {

  initial_role: string;
  role: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.role = this.initial_role = navParams.get("role");
  	this.first_name = navParams.get("first_name");
    this.last_name = navParams.get("last_name");
    this.email = navParams.get("email");
    this.password = navParams.get("password");
    this.username = navParams.get("username");
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizEndPage');
  }

  scientist() {
  	this.role = "Scientist";
  }

  navigator() {
  	this.role = "Navigator";
  }

  engineer() {
  	this.role = "Engineer";
  }

  doctor() {
  	this.role = "Doctor";
  }

  goHome() {
  	this.navCtrl.setRoot( HomePage, {
  		role: this.role,
  		first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          username: this.username
  	});
  }

}
