import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular'
import { IonicPage } from 'ionic-angular';
;
import { MissionsPage } from '../missions/missions';
import { Missions2Page } from '../missions/missions2';
import { Missions3Page } from '../missions/missions3';
import { Missions4Page } from '../missions/missions4';
import { Missions5Page } from '../missions/missions5';
//import { MapPage } from '../map/map';

// mission selection page 
@Component({
  selector: 'page-missions',
  templateUrl: 'missions0.html'
})
export class Missions0Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
          goToMissions()
          {
            this.navCtrl.push(MissionsPage);
          }
          goToMissions2()
          {
            this.navCtrl.push(Missions2Page);
          }

           goToMissions3()
           {
             this.navCtrl.push(Missions3Page);
           }

           goToMissions4()
           {
             this.navCtrl.push(Missions4Page);
           }

           goToMissions5()
           {
             this.navCtrl.push(Missions5Page);
           }

}
