import { Component } from '@angular/core';
import {Response} from '@angular/http';

import {ServerService} from './services/server/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

/**
 * This is an Observable at html we need async pipe 
 */
  appName = this.serverService.getAppName();

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  constructor(private serverService: ServerService){

  }

  onSave():any{
    this.serverService.storeServers(this.servers). //upto this no request hitted
      subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Completed!')
      );
    
  }

  onGet():any{

    this.serverService.getServers().
      subscribe(
        // (response) => console.log(response),
        // (response: Response) =>{
        //   const data = response.json();
        //   console.log(data);
        // },
        (servers: any[]) =>{
          console.log(servers);
          this.servers = servers;
        },
        (error) => console.log(error),
        () => console.log('Completed!')
      );
      
  }
}
