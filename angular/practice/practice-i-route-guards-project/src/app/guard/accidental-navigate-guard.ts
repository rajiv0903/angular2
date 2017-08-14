
import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';

export interface CanComponentDeactivate{
    undoConfirm: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>
{
    canDeactivate(
        component: CanComponentDeactivate, //Component 
        currentRoute: ActivatedRouteSnapshot, //Current Route 
        currentState: RouterStateSnapshot, //Current State
        nextState?: RouterStateSnapshot) //Where do you want to go
        : Observable<boolean> | Promise<boolean> | boolean
    {
        return component.undoConfirm(); //We need to implement the logic at compponent
    }
}