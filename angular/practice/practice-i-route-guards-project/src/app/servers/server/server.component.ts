import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router , Data} from '@angular/router';

import { ServersService } from '../../services/server/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string, editMode: string };

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    //Alternate way to resolve
    // const id = this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(Number(id)); //load the server + is required to convert from string to number
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );

    //Resolve way - Resolving Dynamic Data with resolve Guard
    this.route.data.subscribe(
      (data: Data) =>{
        this.server = data['serverData'];
      }
    );

    //Delay test
    //  this.serversService.getServer(+this.route.snapshot.params['id'])
    //     .subscribe(server => this.server = server);
    // console.log(this.server)
  }

  onEdit(): void {
    //this.router.navigate(['edit'], {relativeTo: this.route});
    //  this.router.navigate(['edit'], 
    //                         {relativeTo: this.route,
    //                         queryParamsHandling:'merge'}
    //                         );//merge

    //to preserve the query params
    // this.router.navigate(['edit'],
    //                       {relativeTo: this.route,
    //                         queryParamsHandling:'preserve'}); //merge  or preserve

    //with fragmet
    this.router.navigate(['edit'],
      {
        relativeTo: this.route,
        queryParamsHandling: 'preserve',
        fragment: this.route.snapshot.fragment
      });
  }

}
