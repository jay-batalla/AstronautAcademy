import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';


import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  password: string;	
  email: string;
  first_name: string;
  role: string;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public loadingCtrl: LoadingController) {
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
  		this.signInLoad();
  		// this.navCtrl.setRoot(HomePage, {
  		// 	first_name: this.first_name,
  		// 	role: this.role
  		// });
  		// this.navCtrl.setRoot(HomePage);
  	}
  	else {
  		this.loginAlert();
  	}
  }

  signInLoad() {
  	let loading = this.loadingCtrl.create({
  		content: 'Getting your information. Please wait...'
  	});

  	loading.present();

  	setTimeout(() => {
  		this.navCtrl.setRoot(HomePage, {
  			first_name: this.first_name,
  			role: this.role
  		});
  	}, 2000);

  	setTimeout (() => {
  		loading.dismiss();
  	}, 2000);
  }

  gosignUp(): void {
  	this.navCtrl.push(SignupPage, {
  		password: this.password,
  		email: this.email
  	});
  }
}
