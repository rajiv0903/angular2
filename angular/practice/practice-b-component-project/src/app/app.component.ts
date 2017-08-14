import { Component } from '@angular/core';

/**
 * We can use styles instead of styleUrls
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
