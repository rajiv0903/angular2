import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx'; //all operator like map reduce filter etc.

interface Server{
  id: number,
  name: string,
  capacity: number
}
/**
 * We are required HTTP service to be inject here 
 * We are using Firbase (Google) to store data 
 * https://rajiv-ng-http.firebaseio.com/ 
 */
@Injectable()
export class ServerService {

  fireBaseDBUrl:string = 'https://rajiv-ng-http.firebaseio.com/';
  serverSchema:string = 'servers.json';
  serverSchemaUrl:string = this.fireBaseDBUrl + this.serverSchema;


  appNameSchema:string = 'appName.json';
  appNameSchemaUrl:string = this.fireBaseDBUrl + this.appNameSchema;

  headers = new Headers({
      'Content-Type': 'application/json',
      'Accept':'application/json'
    });

  constructor(private http: Http) { }

  storeServers(servers: Array<Server> | Server[]): Observable<any>{
    //This request create an Observable - But have not sent the request yet!!!
    // return this.http.post(
    //               this.serverSchemaUrl, 
    //               servers,
    //               {'headers': this.headers});

    return this.http.put(
                  this.serverSchemaUrl, 
                  servers,
                  {'headers': this.headers});

  }

  getServers(): Observable<any>{
    return this.http.get(
                this.serverSchemaUrl,
                {'headers': this.headers})
                .map(
                   (response: Response) =>{
                      const data = response.json();
                      //To check the power of map 
                      for (const server of data){
                        server.name = 'FETCHED_'+ server.name;
                      }
                      return data;
                    }
                )
                .catch(
                   (error: Response) =>{ //error is not observable
                     console.log(error);
                     return Observable.throw('Something went wrong!');
                   }
                );
  }

  getAppName():  Observable<any>{
    return this.http.get(
        this.appNameSchemaUrl, {'headers': this.headers})
        .map(
            (response: Response) =>{
              return response.json();
            }
        );
  }
}
