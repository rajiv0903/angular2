import { Injectable } from '@angular/core';

/**
 * A service is just type script class no decorator is required
 * We should not instantiate the service 
 * We need to inform angular that we need this service 
 * We can user providers 
 */
export class LoggingService {

  logStatusChange(status:string):void {
    console.log('A server status changed, new status: ' + status);
  }

}
