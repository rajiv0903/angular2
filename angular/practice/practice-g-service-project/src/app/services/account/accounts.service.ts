import { Injectable, EventEmitter } from '@angular/core';

import { LoggingService } from '../logging/logging.service';

/**
 * A service is just type script class no decorator is required
 * We should not instantiate the service 
 * We need to inform angular that we need this service 
 * We can user providers 
 * Injectable()- Any other service can be injected 
 * 
 */
@Injectable()
export class AccountsService {

    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  /**
   * Services for cross component communication 
   * Event will emit by account and listen by new account
   */
  statusUpdated = new EventEmitter<string>();

  constructor(private loogingService: LoggingService){}

  addAccount(name:string, status:string): void 
  {
    this.accounts.push({name: name, status: status});
    this.loogingService.logStatusChange(status);
  }

  updateAccount (id: number, status:string)
  {
    this.accounts[+id].status = status;
    this.loogingService.logStatusChange(status);
  }

}
