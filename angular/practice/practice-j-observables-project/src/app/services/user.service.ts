import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  //using Subject to Pass and Listent to Data
  //alternate way to event emitter 
  userActivated: Subject<number> = new Subject<number>();

}
