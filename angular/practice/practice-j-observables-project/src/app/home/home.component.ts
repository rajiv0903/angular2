import { Component, OnInit , OnDestroy} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubscription : Subscription;
  customObsSubscription : Subscription;

  constructor() { }

  ngOnInit() {
    //simple Observable 
    //map operator
    const myNumbers= Observable.interval(1000)
          .map(
            (data: number)=>{
              return data * 2; //return new Observable
            }
          ); 
    
    this.numbersObsSubscription = myNumbers.subscribe(
      (num: number) =>{ //Handle Data
        console.log(num);
      }
    );

    //Advance Observable
    //observer will be our final Observer
    //either error or completed - if any occurs then no next 
    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(function () {
          observer.next('first package');
        }, 2000);
        setTimeout(function () {
          observer.next('second package');
        }, 4000);
        setTimeout(function () {
          observer.error('this does not work!');
         // observer.complete();
        }, 5000);
        setTimeout(function () {
          observer.next('third package');
        }, 6000);
      }
    );

    this.customObsSubscription = myObservable.subscribe(
      (data: string) =>{console.log(data) }, //handle data
      (error: string) =>{console.log(error) }, //handle error
      () => {console.log('completd!') } //completed
    );
  }

  //Make sure always destroy custom built subscription 
  //so that cleaned up the space and memory 
  ngOnDestroy(): void {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
