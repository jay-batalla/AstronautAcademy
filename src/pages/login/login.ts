import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  password: string;	
  email: string;
  first_name: string;
  role: string;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
  	this.first_name = 'Jay';
  	this.role = 'Scientist';
  } 

  loginAlert(){
  	let alert = this.alertCtrl.create({
  		title: 'Wrong email or password',
  		subTitle: 'Please check your spelling',
  		buttons: ['Dismiss']
  	});
  	alert.present();
  }

  checkLogin(): void {
  	if( this.password == 'p' && this.email == 'b' ) {
  		this.navCtrl.push(HomePage, {
  			first_name: this.first_name,
  			role: this.role
  		});
  		// this.navCtrl.setRoot(HomePage);
  	}
  	else {
  		this.loginAlert();
  	}
  }

  gosignUp(): void {
  	this.navCtrl.push(SignupPage, {
  		password: this.password,
  		email: this.email
  	});
  }
}
