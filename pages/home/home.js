"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var signup_1 = require('../signup/signup');
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.navCtrl = navCtrl;
        this.data = {};
        this.data.email = "";
        this.data.password = "";
    }
    HomePage.prototype.navigate = function () {
        console.log('here');
        this.navCtrl.push(signup_1.SignupPage, {
            firstPassed: "Value 1",
            secondPassed: "Value 2"
        });
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: '../home/home.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map