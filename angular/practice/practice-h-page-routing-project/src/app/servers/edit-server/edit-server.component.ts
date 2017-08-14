import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';

import { ServersService } from '../../services/server/servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string, editMode:string};
  serverName:string= '';
  serverStatus:string = '';
  allowEdit: boolean = false;

  constructor(private serversService: ServersService,
            private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params) =>{
        this.allowEdit = queryParams['allowEdit'] === '1'? true : false;
      }
    );
    this.route.fragment.subscribe();

    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(Number(id)); //load the server + is required to convert from string to number
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );

    // this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    //alternate way to query param
    //this.allowEdit  = this.server.editMode === 'on'? true: false;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
