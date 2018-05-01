import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

//  loadProgress: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  /*  setInterval() =>
     {
      if(this.loadProgress < 100)
      {
        this.loadProgress++;
      }

    }, 50); */
  }
}
