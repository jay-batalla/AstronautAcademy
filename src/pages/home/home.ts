import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  first_name: string;
  role: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.first_name = navParams.get("first_name");
  	this.role = navParams.get("role");
  }

}
