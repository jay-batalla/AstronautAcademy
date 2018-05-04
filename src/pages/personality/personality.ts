import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuizEndPage } from '../quiz-end/quiz-end';

@IonicPage()
@Component({
  selector: 'page-personality',
  templateUrl: 'personality.html',
})
export class PersonalityPage {

  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;
  question: string;
  role: string;
  scientist_answer: string; sci: number;
  navigator_answer: string; nav: number;
  engineer_answer: string; eng: number;
  doctor_answer: string; doc: number;
  question_number: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.question = "What do you want to be when you grow up?";
  	this.scientist_answer = "A scientist";
  	this.navigator_answer = "A pilot";
  	this.engineer_answer = "An engineer";
  	this.doctor_answer = "A doctor";
  	this.sci = this.nav = this.eng = this.doc = 0;
  	this.question_number = 1;
    this.first_name = navParams.get("first_name");
    this.last_name = navParams.get("last_name");
    this.email = navParams.get("email");
    this.password = navParams.get("password");
    this.username = navParams.get("username");
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

  checkQuestion( number ): void {
  	if( number + 1 == 6 )
  	   {
        var answers = new Array(this.sci, this.nav, this.eng, this.doc);
        this.determineRole( answers );
  	   	this.navCtrl.setRoot(QuizEndPage, {
          role: this.role,
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          username: this.username
        });
  	   }
  	else
  	   {
  	   	this.changeQuestion(number);
  	   }
  }

  changeQuestion( number ): void {
  	switch( number ) {
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

  determineRole( answers:number[] ): void {
    if( answers.length == 0 )
       {
        //default answer is scientist
        this.role = 'Scientist';
       }

    var max = answers[0];
    var maxIndex = 0;

    for( var counter = 0; counter < answers.length; counter++ )
    {
      if( answers[counter] > max )
         {
          max = answers[counter];
          maxIndex = counter;
         }
    }

    switch(maxIndex)
       {
        case 0:
          this.role = 'Scientist';
          break;
        case 1:
          this.role = 'Navigator';
          break;
        case 2:
          this.role = 'Engineer';
          break;
        case 3:
          this.role = 'Doctor';
          break;
       }
  }

}
