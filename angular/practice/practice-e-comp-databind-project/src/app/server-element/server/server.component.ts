import { Component } from '@angular/core';

/**
 * Angular needs a decorator to inform that this is not a normal class
 */
/**
 * Here Component is a decorator 
 */
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    /**
     * String Interpolation
     */
    serverId: number= 10;
    serverStatus :string = 'offline';
    //end

    getServerStatus():string {
        return this.serverStatus;
    }
}