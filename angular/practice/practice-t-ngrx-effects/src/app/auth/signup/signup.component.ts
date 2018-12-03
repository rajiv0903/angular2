import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { State, Store } from '@ngrx/store';

import * as appState from '../../store/app.reducers';
import * as authActions from '../store/auth.actions';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<appState.AppState>) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //this.authService.signupUser(email, password);
    this.store.dispatch(new authActions.TrySignup({usename: email, password: password}));
  }

}
