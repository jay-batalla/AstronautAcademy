import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { LoginDataProvider } from '../../providers/login-data/login-data';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  password: string;	
  username: string;
  first_name: string;
  role: string;

  //login: any = {};

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public loadingCtrl: LoadingController, public loginService: LoginDataProvider) {
  	this.first_name = 'Jay';
  	this.role = 'Scientist';
    // this.login.username = '';
    // this.login.password = '';
  } 

  ionViewDidLoad(){
    //this.loginService.getRemoteData();
    // this.loginService.sendLogin( this.login );
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
  		if ( this.verifyLogin(this.username, this.password) )
         {
          this.signInLoad();
         }
      else
        {
          this.loginAlert();
        }
  }

  signInLoad() {
  	let loading = this.loadingCtrl.create({
  		content: 'Getting your information. Please wait...'
  	});

  	loading.present();

  	setTimeout(() => {
      // var myData = JSON.stringify({username: this.login.username, password: this.login.password});
      // this.loginService.sendLogin( this.login );
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

  verifyLogin(username:string, password:string) {
    switch( username )
      {
        case 'jay':
          if( password == 'jay')
            {
              this.role = 'Scientist';
              this.first_name = "Jay";
              return true;
            }
          else return false;
          break;
        case 'nikesh':
          if( password == 'nikesh')
            {
              this.role = 'Navigator';
              this.first_name = "Nikesh";
              return true;
            }
          else return false;
          break;
        case 'narinder':
          if( password == 'narinder')
            {
              this.role = 'Engineer';
              this.first_name = "Narinder";
              return true;
            }
          else return false;
          break;
        case 'sahana':
          if( password == 'sahana')
            {
              this.role = 'Dcotor';
              this.first_name = "Sahana";
              return true;
            }
          else return false;
          break;
        default:
          return false;
          break;
      }
  }
}
