import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServersService } from '../services/server/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string, editMode: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(): void{
    //this.router.navigate(['servers']); 
    //navigate method does not know what is the currentlly loaded router

    //this.router.navigate(['servers'], {relativeTo:this.route}); //relative to activated route
  }

}
