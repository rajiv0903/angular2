import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import * as appState from '../store/app.reducers';
import * as authState from './store/auth.reducers';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<appState.AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').pipe(
      map(
        (authState: authState.State) =>{
          return authState.authenticated;
        }
    ))
  }
}
