import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

/**
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');

     //this.itemRef.orderByChild("total_points").on('value',(itemSnapshot) =>{
      //this.items = [];
      //itemSnapshot.forEach( itemSnap => {
        //this.items.push(itemSnap.val());
        //return false;
      //});
      //var j = 0;
      //this.items.reverse().forEach(i=>{
        //j++;
        //if (new String(i.username).valueOf() == new String(this.username).valueOf()){
          //console.log("Trovato")
          //this.position = j;
        //}
      //})

      //return this.items; 
    //});
  //}

}
}
