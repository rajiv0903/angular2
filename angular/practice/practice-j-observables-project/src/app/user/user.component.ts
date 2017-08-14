import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    //Observer part 
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }//handle data - error and complete is not required
      );
  }

  onActivate(): void{
    //using Subject to Pass Data
    this.userService.userActivated.next(this.id);
    //this.userService.userActivated.error(this.id);
    //this.userService.userActivated.complete();
  }

}
