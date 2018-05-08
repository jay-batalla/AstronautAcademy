import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { QuizStartPage } from '../quiz-start/quiz-start'
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

SignupForm: FormGroup;
signupError: string;

  first_name: string;
  last_name: string;
  email: string;
  password: string;

 
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public db: AngularFireDatabase, private auth: AuthService,
fb: FormBuilder) {

    this.SignupForm = fb.group({
		email: [''],
		password: [''],
    first_name: [''],
    last_name: ['']
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  
signup() {
		let data = this.SignupForm.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(QuizStartPage, {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password
      }),
			error => this.signupError = error.message
		);
}

  writeUserData()

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
      });
        this.db.list('firstName').push(this.first_name);
        this.db.list('lastName').push(this.first_name);
        this.db.list('email').push(this.email);
        this.db.list('password').push(this.password);
    }, 2000);

    setTimeout (() => {
      loading.dismiss();
    }, 2000);
  }
}
