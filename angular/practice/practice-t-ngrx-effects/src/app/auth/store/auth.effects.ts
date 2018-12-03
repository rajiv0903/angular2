import {Effect, Actions, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {from} from 'rxjs';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';

import * as authActions from './auth.actions';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects{

    //It will check if it is of certain type
    @Effect()
    authSignup = this.actions$
        .ofType(authActions.TRY_SIGNUP)
        .pipe(
            map((action: authActions.TrySignup) => {
                    return action.payload; //new observable
                }
            ),
            switchMap((authData: {usename: string, password: string}) =>{
                    return from(firebase.auth().createUserWithEmailAndPassword(authData.usename, authData.password));
                }
            ),
            switchMap(() => {
                   return from(firebase.auth().currentUser.getIdToken());
                }
            ),
            mergeMap((token: string)=> { //Merge is required as we are dispatching two actions
                   return [
                       {
                            type: authActions.SIGNUP
                        },
                        {
                            type: authActions.SET_TOKEN,
                            payload: token
                        }
                    ]
                }
            )
        );

    @Effect()
    authSignin = this.actions$
    .ofType(authActions.TRY_SIGNIN)
    .pipe(
        map((action: authActions.TrySignup) => {
                return action.payload; //new observable
            }
        ),
        switchMap((authData: {usename: string, password: string}) =>{
                return from(firebase.auth().signInWithEmailAndPassword(authData.usename, authData.password));
            }
        ),
        switchMap(() => {
               return from(firebase.auth().currentUser.getIdToken());
            }
        ),
        mergeMap((token: string)=> { //Merge is required as we are dispatching two actions
            this.router.navigate(['/'])
            return [
                {
                    type: authActions.SIGNIN
                },
                {
                    type: authActions.SET_TOKEN,
                    payload: token
                }
            ]
        }
        )
    );

    @Effect({dispatch:false})
    authLogout = this.actions$.ofType(authActions.LOGOUT).pipe(
        tap(()=> {
            this.router.navigate(['/'])
        })
    )
    constructor(private actions$:Actions, private router: Router){}
}