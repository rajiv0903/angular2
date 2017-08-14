import { Injectable } from '@angular/core';
import * as fbase from 'firebase';

// @Injectable()
export class AuthService {

  token :string = null;
  
  constructor() { }

  signupUser(email: string, password: string){
    fbase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        (error) => console.log(error)
      );
  }

  signinUser(email: string, password: string)
  {
    fbase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => 
        {
          fbase.auth().currentUser.getToken()
            .then(
              (token: string) => {this.token = token}
            );
        }
      )
      .catch(
          (error) => console.log(error)
        );
  }

  getToken() {
    //This is asychronous
    //It will not check local storage also get the token from firebase 
    fbase.auth().currentUser.getToken()
      .then(
          (token) => this.token = token
      );
    return this.token;
  }

  isAuthenticated(): boolean{
    return this.token != null ;
  }
}
