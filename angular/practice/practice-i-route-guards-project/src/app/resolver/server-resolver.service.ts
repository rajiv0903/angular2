import { Injectable } from '@angular/core';
import { Resolve , ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {ServersService} from '../services/server/servers.service';

interface Server{
  id:number,
  name:string,
  status: string,
  editMode: string
}

/**
 * To ensure that certain data is loaded before a route is actually activated
 */
//Resolve way - Resolving Dynamic Data with resolve Guard

@Injectable()
export class ServerResolverService implements Resolve<Server>{

  constructor(private serversService: ServersService,) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | 
  Promise<Server> | Server {

    return this.serversService.getServer(+route.paramMap.get('id'));
  }

}
