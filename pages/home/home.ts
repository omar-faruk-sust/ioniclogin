import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-home',
  templateUrl: '../home/home.html'
})
export class HomePage {
  private navCtrl;
  data : any;
  constructor(public navCtrl: NavController){
    this.navCtrl = navCtrl;
    this.data = {};
    this.data.email = "";
    this.data.password = "";
  }

  navigate(){
  console.log('here');
    this.navCtrl.push(SignupPage,{
      firstPassed: "Value 1",
      secondPassed: "Value 2",
    });
  }

  // login() {
  //   let email = this.data.email;
  //   let password = this.data.password;
  //   let data = JSON.stringify({email, password});
  //   let link = "http://"
  //
  //   this.http.post(link,data).subscribe(data=>{
  //           console.log("success");
  //       },error => {
  //           console.log("error huh!");
  //       });
  // }

}
