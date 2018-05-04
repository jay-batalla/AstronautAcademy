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
  location: number;
  users: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.first_name = navParams.get("first_name");
    this.username = navParams.get("username");
    this.users = [
    {username: 'jay', progress: 35},
    {username: 'nikesh', progress: 50},
    {username: 'sahana', progress: 75},
    {username: 'narinder', progress: 0},
    {username: 'devrin', progress: 85},
    {username: 'sergiu', progress: 60},
    {username: 's.glove', progress: 100},
  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');

    function search( username:string , users:Array<Object> ) : bool
  {
    for( var k = 0; k < users.length; k++ )
       {
        if( users[k].username == username )
        {
          return true;
        }
       }
  }

      if( search(this.username, this.users) ) {
        //do nothing
      }
      else //if the username doesn't appear, add it to array
         {
          this.users.push({username: this.username, progress: 20});
         }

    console.log(this.users);

    function compare(a,b) {
    if (a.progress < b.progress)
      return 1;
    if (a.progress > b.progress)
      return -1;
    return 0;
  }

    this.users.sort(compare);

    for( var i = 0; i < this.users.length; i++ )
     {
      if( this.username == this.users[i].username ) {
        this.location = i + 1;
      }
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

