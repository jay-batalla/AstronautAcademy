import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { MapPage } from '../map/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  first_name: string;
  role: string;
  mapPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  	this.first_name = navParams.get("first_name");
  	this.role = navParams.get("role");
    this.mapPage = MapPage;
  }


  signOutLoad() {
  	let loading = this.loadingCtrl.create({
  		content: 'Logging out...'
  	});

  	loading.present();

  	setTimeout(() => {
  		this.navCtrl.setRoot(LoginPage);
  	}, 1000);

  	setTimeout(() => {
  		loading.dismiss();
  	}, 1000);

  }
    goMap()
    {
      this.navCtrl.push(MapPage);
    }
}
