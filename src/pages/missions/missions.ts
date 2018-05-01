import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HomePage } from '../home/home';
import { FlashCardComponent } from '../../components/flash-card/flash-card';
import { Missions2Page } from '../missions/missions2';

import { MapPage } from '../map/map';

/**
 * Generated class for the MissionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @Component({
   selector: 'page-missions',
   templateUrl: 'missions.html'
 })
 export class MissionsPage {

     @ViewChild('slides') slides: any;

     hasAnswered: boolean = false;
     one_score: number = 0;

     slideOptions: any;
     questions: any;

    constructor(public navCtrl: NavController, public dataService: DataProvider, public navParams: NavParams) {

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
                 this.one_score++;
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
             this.one_score = 0;
             this.slides.lockSwipes(false);
             this.slides.slideTo(1, 1000);
             this.slides.lockSwipes(true);
         }

         goMap() {
            this.navCtrl.push(MapPage);
         }

         goToMission2()
         {
           this.navCtrl.setRoot(Missions2Page,
           {
            one_score: this.one_score
           }
            );
         }

         goHome()
         {
            this.navCtrl.setRoot(HomePage, {
                one_score: this.one_score,
                two_score: this.two_score
            });
         }
     }
