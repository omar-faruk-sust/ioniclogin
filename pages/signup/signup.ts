import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: '../signup/signup.html',
  entryComponents:[ SignupPage ]
})

export class SignupPage {
  public firstParam:any;
  public secondParam:any;

  constructor(public navCtrl: NavController,  public params: NavParams) {
    this.firstParam = params.get("firstPassed");
    this.secondParam = params.get("secondPassed");
  }

}
