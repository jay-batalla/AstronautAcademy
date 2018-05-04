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

  username: string;
  first_name: string;
  progress: number;
  location: number
  users: Array<Object> = [
    {username: 'jay', progress: 35},
    {username: 'nikesh', progress: 50},
    {username: 'sahana', progress: 75},
    {username: 'narinder', progress: 25},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.first_name = navParams.get("first_name");
    this.username = navParams.get("username");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');


    console.log(this.users);

    for( let user in this.users )
     {
      if( this.username == user.username )
        console.log(user.username);
     }

    //  this.itemRef.orderByChild("total_points").on('value',(itemSnapshot) =>{
    //   this.items = [];
    //   itemSnapshot.forEach( itemSnap => {
    //     this.items.push(itemSnap.val());
    //     return false;
    //   });
    //   var j = 0;
    //   this.items.reverse().forEach(i=>{
    //     j++;
    //     if (new String(i.username).valueOf() == new String(this.username).valueOf()){
    //       console.log("Trovato")
    //       this.position = j;
    //     }
    //   })
    //   return this.items;
    // });
  }
}

