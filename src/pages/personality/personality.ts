import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-personality',
  templateUrl: 'personality.html',
})
export class PersonalityPage {

  question: string;
  scientist_answer: string; sci: int;
  navigator_answer: string; nav: int;
  engineer_answer: string; eng: int;
  doctor_answer: string; doc: int;
  question_number: int;	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.question = "What do you want to be when you grow up?";
  	this.scientist_answer = "A scientist";
  	this.navigator_answer = "A pilot";
  	this.engineer_answer = "An engineer";
  	this.doctor_answer = "A doctor";
  	this.sci = this.nav = this.eng = this.doc = 0;
  	this.question_number = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalityPage');
  }

  scienceAnswer() {

  	this.sci++;
  	this.question_number++;
  	this.checkQuestion(this.question_number);
  }

  navigatorAnswer() {
  	this.nav++;
  	this.question_number++;
  	this.checkQuestion(this.question_number);
  }

  engineerAnswer() {
  	this.eng++;
  	this.question_number++;
  	this.checkQuestion(this.question_number);
  }

  doctorAnswer() {
  	this.doc++;
  	this.question_number++;
  	this.checkQuestion(this.question_number);
  }

  checkQuestion( int ): void {
  	if( int + 1 == 5 )
  	   {
  	   	this.navCtrl.setRoot(HomePage);
  	   }
  	else
  	   {
  	   	this.changeQuestion(int);
  	   }
  }

  changeQuestion( int ): void {
  	switch( int ) {
  		case 2:
  			this.question = "What interests you the most?";
		  	this.scientist_answer = "Experiments";
		  	this.navigator_answer = "Maps";
		  	this.engineer_answer = "Technology";
		  	this.doctor_answer = "Medicine";
  			break;
  		case 3:
  			this.question = "If you were on a spaceship on a mission to Mars, what would you be doing to help the crew?";
		  	this.scientist_answer = "Researching Mars’ atmosphere";
		  	this.navigator_answer = "Making sure the ship is on course";
		  	this.engineer_answer = "Fixing important equipment";
		  	this.doctor_answer = "Taking care of the sick ";
  			break;
  		case 4:
  			this.question = "Where would you be if you were part of a spaceship crew?";
		  	this.scientist_answer = "Laboratory ";
		  	this.navigator_answer = "Bridge";
		  	this.engineer_answer = "Engine Room";
		  	this.doctor_answer = "Medical Bay";
  			break;
  	}
  }

}
