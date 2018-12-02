import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://rajiv-ng-http.firebaseio.com/servers.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://rajiv-ng-http.firebaseio.com/servers.json',
      servers,
      {headers: headers});
  }
  getServers() {
    return this.http.get('https://rajiv-ng-http.firebaseio.com/servers.json')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      ),catchError(
        (error: Response) => {
          return throwError('Something went wrong');
        }
      ));
  }
  getAppName() {
    return this.http.get('https://rajiv-ng-http.firebaseio.com//appName.json')
      .pipe(map(
        (response: Response) => {
          return response.json();
        }
      ));
  }
}
