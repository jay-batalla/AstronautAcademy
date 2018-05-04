import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FlashCardComponent } from '../../components/flash-card/flash-card';
import { MissionsPage } from '../missions/missions';
import { Missions5Page } from '../missions/missions5';
import { DataProvider4 } from '../../providers/data/data3';

import { MapPage } from '../map/map';

// mission 4 page 
 @Component({
   selector: 'page-missions',
   templateUrl: 'missions4.html'
 })
 export class Missions4Page {

     @ViewChild('slides') slides: any;

     hasAnswered: boolean = false;
     score: number = 0;

     slideOptions: any;
     questions: any;

    constructor(public navCtrl: NavController, public dataService: DataProvider4) {

    }

         ionViewDidLoad() {

             this.slides.lockSwipes(true);

             this.dataService.load().then((data) => {

                 data.map((question) => {

                     let originalOrder = question.answers;
                     question.answers = this.randomizeAnswers(originalOrder);
                     return question;

                 });

                 this.questions = data;

             });

         }

         nextSlide(){
             this.slides.lockSwipes(false);
             this.slides.slideNext();
             this.slides.lockSwipes(true);
         }

         selectAnswer(answer, question){

             this.hasAnswered = true;
             answer.selected = true;
             question.flashCardFlipped = true;

             if(answer.correct){
                 this.score++;
             }

             setTimeout(() => {
                 this.hasAnswered = false;
                 this.nextSlide();
                 answer.selected = false;
                 question.flashCardFlipped = false;
             }, 3000);
         }

         randomizeAnswers(rawAnswers: any[]): any[] {

             for (let i = rawAnswers.length - 1; i > 0; i--) {
                 let j = Math.floor(Math.random() * (i + 1));
                 let temp = rawAnswers[i];
                 rawAnswers[i] = rawAnswers[j];
                 rawAnswers[j] = temp;
             }

             return rawAnswers;

         }

         restartQuiz() {
             this.score = 0;
             this.slides.lockSwipes(false);
             this.slides.slideTo(1, 1000);
             this.slides.lockSwipes(true);
         }

         goToMission5()
         {
           this.navCtrl.push(Missions5Page);
         }

         goToHome()
         {
           this.navCtrl.push(HomePage);
         }

         goMap()
         {
            this.navCtrl.push(MapPage);
         }

}
