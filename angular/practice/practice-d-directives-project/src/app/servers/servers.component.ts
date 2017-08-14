import { Component, OnInit } from '@angular/core';

/**
 * Directives- are instruction in the DOM!
 * We can use element or attribute style both 
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
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  //Property Binding
  allowNewServer:boolean = false;
  //Event
  serverCreationStatus:string = 'No server was created';
  //Two way binding
  serverName:string = 'TestServer';
  serverCreated:boolean = false;
  servers: Array<string>= ['Test Server', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }
  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!: ' + this.serverName;
    this.servers.push(this.serverName);
  } 
  onServerUpdate(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
