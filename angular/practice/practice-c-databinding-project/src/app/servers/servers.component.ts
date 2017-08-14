import { Component, OnInit } from '@angular/core';

/**
 * We can use template if we want inline html 
 * For multi line string use Javascript template expression 
 * This is CSS style selector -
 * We can use element - app-root
 * Or attribute - [app-root]
 * We can use styles instead of styleUrls
 */
@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  /**
   * Property Binding
   */
  allowNewServer = false;

  /**
   * Event
   */
  serverCreationStatus = 'No server was created';

  /**
   * Two way binding
   */
  serverName = 'Test Server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!: '+ this.serverName;
  }

  onServerUpdate (event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
