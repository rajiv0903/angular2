import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';

import { ServersService } from '../../services/server/servers.service';

//Accidental Guard
import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from '../../guard/accidental-navigate-guard';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , CanComponentDeactivate{
  server: {id: number, name: string, status: string, editMode:string};
  serverName:string= '';
  serverStatus:string = '';
  allowEdit: boolean = false;

  //Accidental Guard
  statusChanged: boolean = false;

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

    //Accidental Guard
    this.statusChanged = true;
  }
  //Accidental nabigation
  undoConfirm () : Observable<boolean> | Promise<boolean> | boolean{
    //if not edit mode 
    if(!this.allowEdit){
      return true;
    }
    //if change and did not save 
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status
      ) && ! this.statusChanged)
    {
      return confirm('Do you want to discard the change?')
    }else{
      return true;
    }
  }
}
