import { Component } from '@angular/core';

/**
 * We can use styles instead of styleUrls
 * 
 * Databinding
 * Output Data - From TS to Template 
 * String Interpolation  {{name}}
 * Property Binding [prop]="data"
 * 
 * Input Data- Event Binding 
 * (event)= "expression"
 * 
 * Combination of Both - Two Way Binding
 * [(ngModel)] = "data"
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [`
    h3{
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'app';
}
