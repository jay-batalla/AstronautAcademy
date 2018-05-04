import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FlashCardComponent } from '../../components/flash-card/flash-card';
import { MissionsPage } from '../missions/missions';
import { Missions3Page } from '../missions/missions3';
import { DataProvider2 } from '../../providers/data/data1';

import { MapPage } from '../map/map';

// mission 2 page
 @Component({
   selector: 'page-missions',
   templateUrl: 'missions2.html'
 })
 export class Missions2Page {

     @ViewChild('slides') slides: any;

     hasAnswered: boolean = false;
     two_score: number = 0;
     one_score: number;


     slideOptions: any;
     questions: any;

    constructor(public navCtrl: NavController, public dataService: DataProvider2, public navParams: NavParams) {
        this.one_score = navParams.get("one_score");
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
                 this.two_score++;
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
             this.two_score = 0;
             this.slides.lockSwipes(false);
             this.slides.slideTo(1, 1000);
             this.slides.lockSwipes(true);
         }

         goToMission3()
         {
           this.navCtrl.push(Missions3Page);
         }

         goToProgress()
         {
           this.navCtrl.push(HomePage, {
            one_score: this.one_score,
            two_score: this.two_score
           });
         }

         goMap()
         {
            this.navCtrl.push(MapPage);
         }

         goToHome()
         {
           this.navCtrl.push(HomePage);
         }

}
