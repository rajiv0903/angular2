import { Component , OnInit, OnDestroy} from '@angular/core';

import {UserService} from './services/user.service';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  user1Activate: boolean = false;
  user2Activate: boolean = false;

  userActivatedSubscription : Subscription;

  constructor(private userService : UserService){ }

  ngOnInit(): void {

    //using Subject to Listen Data
    this.userActivatedSubscription =
    this.userService.userActivated.subscribe(
      (id:number) =>{
        if(id === 1){
          this.user1Activate = true;
        }else if(id === 2){
          this.user2Activate = true;
        }
      },
      // (error:number) =>{
      //   if(error === 1){
      //     this.user1Activate = true;
      //   }else if(error === 2){
      //     this.user2Activate = true;
      //   }
      // },
      // () =>{
      // }
    )
  }

  ngOnDestroy():void{
    this.userActivatedSubscription.unsubscribe();
  }
}
