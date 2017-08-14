import { Component } from '@angular/core';

/**
 * Angular needs a decorator to inform that this is not a normal class
 */
/**
 * Here Component is a decorator 
 */
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent{
    /**
     * String Interpolation
     */
    serverId: number= 10;
    serverStatus :string = 'offline';
    //end

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
    }
    getServerStatus():string {
        return this.serverStatus;
    }

    getColor():string{
        return this.serverStatus === 'online'? 'green': 'red';
    }
}