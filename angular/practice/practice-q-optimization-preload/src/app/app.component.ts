import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC2V6bH2L210dxYqkzSQVBuvcTAMOnqbII",
    authDomain: "rajiv-recipe-book.firebaseapp.com"
    });
  }
}
