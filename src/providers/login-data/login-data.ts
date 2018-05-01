import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginDataProvider {

	data: Observable<any>;

  constructor(public http: HttpClient) {
    console.log('Hello LoginDataProvider Provider');
  }

  sendLogin( data:any = {} ){

  	// var server = 'http://35.199.153.97:3379/accounts/login?auth_token=mytoken';
  	// var myData = JSON.stringify({username: data.username, password: data.password});


  	// console.log("This is the username and password");
  	// console.log(myData);

  	// this.data = this.http.post( server, myData );

  	// this.data.subscribe(data => {
  	// 	console.log(data);
  	// })
  }

}
