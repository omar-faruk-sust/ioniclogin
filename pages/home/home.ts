import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-home',
  templateUrl: '../home/home.html'
})
export class HomePage {
  private navCtrl;
  constructor(public navCtrl: NavController){
    this.navCtrl = navCtrl;
  }

  navigate(){
  console.log('here');
    this.navCtrl.push(SignupPage,{
      firstPassed: "Value 1",
      secondPassed: "Value 2",
    });
  }

}
