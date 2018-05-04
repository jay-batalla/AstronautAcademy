import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { MapPage } from '../map/map';
import { MissionsPage } from '../missions/missions';
import { Missions0Page } from '../missions/missions0';
import { LeaderboardPage } from '../leaderboard/leaderboard';
import { ProgressPage } from '../progress/progress';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;
  role: string;
  mapPage: any;
  one_score: number;
  two_score: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  	this.first_name = navParams.get("first_name");
    this.last_name = navParams.get("last_name");
    this.email = navParams.get("email");
    this.password = navParams.get("password");
    this.username = navParams.get("username");
  	this.role = navParams.get("role");
    this.one_score = navParams.get("one_score");
    this.two_score = navParams.get("two_score");
  }


  signOutLoad() {
  	let loading = this.loadingCtrl.create({
  		content: 'Logging out...'
  	});

  	loading.present();

  	setTimeout(() => {
  		this.navCtrl.setRoot(LoginPage, {
        role: this.role,
         first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          username: this.username
      });
  	}, 1000);

  	setTimeout(() => {
  		loading.dismiss();
  	}, 1000);

  }
    goToMap()
    {
      this.navCtrl.push(MapPage);
    }

    goToMissions0()
    {
      this.navCtrl.push(Missions0Page);
    }

    goToLeaderboard()
    {
      this.navCtrl.push(LeaderboardPage, {
        first_name: this.first_name,
        username: this.username
      });
    }

    goToProgress()
    {
      this.one_score = 7;
      this.navCtrl.push(ProgressPage, {
        one_score: this.one_score,
        two_score: this.two_score
      });
    }

}
