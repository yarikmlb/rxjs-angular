import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/range';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public sequence: Observable<number|string>;

  constructor(){
    this.sequence = Observable.range(1, 100)
      .map((item:number) => {
        if(item % 3 === 0 || item % 5 === 0) {
          if(item % 3 === 0 && item % 5 === 0) {
            return "FizzBuzz";
          }else if(item % 3 === 0) {
            return "Fizz";
          }else {
            return "Buzz";
          }
        }else {
          return item;
        }
      });

    this.sequence.subscribe((item:number|string) => console.log(item));
  }
}
