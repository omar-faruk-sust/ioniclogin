"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SignupPage = (function () {
    function SignupPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.firstParam = params.get("firstPassed");
        this.secondParam = params.get("secondPassed");
    }
    SignupPage = __decorate([
        core_1.Component({
            selector: 'page-signup',
            templateUrl: '../signup/signup.html'
        })
    ], SignupPage);
    return SignupPage;
}());
exports.SignupPage = SignupPage;
//# sourceMappingURL=signup.js.map