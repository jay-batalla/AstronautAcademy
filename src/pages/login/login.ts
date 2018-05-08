import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { LoginDataProvider } from '../../providers/login-data/login-data';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm: FormGroup;
  loginError: string;

  role: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;
  loginUser: string = '  ';
  loginPass: string;
  //login: any = {};

  constructor(public navParams: NavParams, public alertCtrl: AlertController, public navCtrl: NavController, public loadingCtrl: LoadingController, public loginService: LoginDataProvider, public db: AngularFireDatabase, private auth: AuthService,
fb: FormBuilder) {
  	this.role = navParams.get("role");
    this.first_name = navParams.get("first_name");
    this.last_name = navParams.get("last_name");
    this.email = navParams.get("email");
    this.password = navParams.get("password");
    this.username = navParams.get("username");

    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
});    
  } 

  ionViewDidLoad(){
    //this.loginService.getRemoteData();
    // this.loginService.sendLogin( this.login );
  }

  login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        () => this.navCtrl.setRoot(HomePage),
        error => this.loginError = error.message
      );
}

  loginAlert(){
  	let alert = this.alertCtrl.create({
  		title: 'Wrong username or password',
  		subTitle: 'Please check your spelling',
  		buttons: ['Dismiss']
  	});
  	alert.present();
  }

  checkLogin(): void {
  		if ( this.verifyLogin(this.loginUser, this.loginPass) )
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
  			role: this.role,
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

  gosignUp(): void {
  	this.navCtrl.push(SignupPage, {
  		password: this.password
  	});
  }

  verifyLogin(username:string, password:string) {
    switch( username )
      {
        case 'jay':
          if( this.loginPass == 'jay')
            {
              this.role = 'Scientist';
              this.first_name = "Jay";
              this.username = 'jay';
              return true;
            }
          return false;
        case 'nikesh':
          if( this.loginPass == 'nikesh')
            {
              this.role = 'Navigator';
              this.first_name = "Nikesh";
              this.username = 'nikesh';
              this.db.list('role').push(this.role);
              this.db.list('firstName').push(this.first_name);
              this.db.list('username').push(this.username);

              return true;
            }
          return false;
        case 'narinder':
          if( this.loginPass == 'narinder')
            {
              this.role = 'Engineer';
              this.first_name = "Narinder";
              this.username = 'narider';
              return true;
            }
          return false;
        case 'sahana':
          if( this.loginPass == 'sahana')
            {
              this.role = 'Dcotor';
              this.first_name = "Sahana";
              this.username = 'sahana';
              return true;
            }
          return false;
        case this.username:
         if( this.loginPass == this.password )
         {
          return true;
         }
         return false;
        default:
          return false;
      }
  }
}
