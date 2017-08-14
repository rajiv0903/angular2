import { Component,  Input } from '@angular/core';

//import { LoggingService } from '../services/logging/logging.service';
import { AccountsService } from '../services/account/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor (private accountsService: AccountsService){}

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    //Emit the event from here to listent by another component i.e. new account
    this.accountsService.statusUpdated.emit(status);
  }
}
