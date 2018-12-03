import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as authState from '../store/app.reducers';
import * as authActions from '../auth/store/auth.actions';

@Injectable()
export class AuthService {

  constructor(private router: Router, private store: Store<authState.AppState>) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        user =>{
          this.store.dispatch(new authActions.SignUp());
          firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              this.store.dispatch(new authActions.SetToken(token));
            }
          )
        }
      )
      .catch(
          error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.store.dispatch(new authActions.SignUp());
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.store.dispatch(new authActions.SetToken(token));
              }
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new authActions.Logout());
  }
}
