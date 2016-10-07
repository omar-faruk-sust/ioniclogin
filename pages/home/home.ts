import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';


@Component({
  selector: 'page-home',
  templateUrl: '../home/home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController){

  }

  naviagte(){
    this.navCtrl.push(SignupPage,{
      firstPassed: "Value 1",
      secondPassed: "Value 2",
    })
  }

}
