import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  password: string;	
  email: string;

  constructor(public navCtrl: NavController) {

  }

  checkLogin(): void {
  	if( this.password == 'password' && this.email == 'batalla.jay@gmail.com' ) {
  		this.navCtrl.setRoot(HomePage);
  	}
  }

  gosignUp(): void {
  	this.navCtrl.push(SignupPage, {
  		password: this.password,
  		email: this.email
  	});
  }
}
