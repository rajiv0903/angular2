import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * Attribute Vs Structural Directives
 * 
 * Attribute - Look like a normal HTML Attribute (Possibly Data or Event Binding)
 *            Only affect/change the element on which they are added to 
 * 
 * Structural -  Look like a normal HTML attribute but having a leading *( for desugaring)
 *            Affect the whole area of DOM (element get added or deleted)
 *            Only one Structural attribute allow per element 
 */
export class AppComponent {
  //numbers: Array<number> = [1, 2, 3, 4, 5];
  oddNumbers: Array<number> = [1, 3, 5];
  evenNumbers: Array<number> = [2, 4];
  onlyOdd: boolean = false;
  value:number = 10;
}
