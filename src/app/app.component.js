"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/observable/range');
var AppComponent = (function () {
    function AppComponent() {
        this.sequence;
        Observable_1.Observable < number > ;
        Observable_1.Observable.range(1, 100)
            .map(function (item) {
            if (item % 3 === 0 || item % 5 === 0) {
                if (item % 3 === 0 && item % 5 === 0) {
                    console.log("FizzBuzz");
                }
                else if (item % 3 === 0) {
                    console.log("Fizz");
                }
                else {
                    console.log("Buzz");
                }
            }
            else {
                console.log(item);
            }
        });
        this.sequence.subscribe(function (item) { return item; });
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map