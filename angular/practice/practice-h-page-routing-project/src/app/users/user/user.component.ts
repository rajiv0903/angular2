
import { Component, OnInit, OnDestroy } from '@angular/core';
import  { ActivatedRoute, Params } from '@angular/router';


import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};

  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    //taking param from current route
    this.user= {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    //Fetching params reactively so that Observable 
    //This is required same component will reload for some event 
    //Subscription will be always in memory - for custome destouy
    this.paramsSubscription = this.route.params.
        subscribe(
          (params:Params) =>{
            this.user.id = params['id'];
            this.user.name = params['name'];
          }
        );
  }

  ngOnDestroy(){
    //Angular will do this but for own Observable you need to 
    this.paramsSubscription.unsubscribe();
  }


}
