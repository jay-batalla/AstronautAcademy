import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

  private buttonColor:string = "primary";
  private outline:boolean = true;

  complete_one: boolean;
  complete_two: boolean;
  complete_three: boolean;
  complete_four: boolean;
  complete_five: boolean;

  // one_best: number;
  // two_best: number;
  // one_score: number;
  // two_score: number;

  //loadProgress: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //   one_score = navParams.get("one_score");
  //   two_score = navParams.get("two_score");
  //   if( one_score >= one_best )
  //      {
  //       one_best = one_score;
  //      }
  //   if( two_score >= two_best)
  //   {
  //     two_best = two_score;
  //   }
  // }


}
  ionViewDidLoad() {

    /*setInterval() =>
     {
      if(this.loadProgress < 100)
      {
        this.loadProgress++;
      }

    }, 50);
  }  */
}

someAction() {
  this.buttonColor = "light";
}
}
