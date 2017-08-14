import { Injectable} from '@angular/core';

import { 
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, 
  Router,
  CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

/**
 * This is the guard for routing 
 * We may prevent to initialize the component by this guard 
 * by applying this guard to specific route 
 * 
 * CanActivate is the method
 */
@Injectable()
export class AuthGuardService implements CanActivate , CanActivateChild{

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) =>{
          if(authenticated){
            return true;
          }
          else{
            //navigate to another page 
            this.router.navigate(['/']);
          }
        }
      );
  }

  //To Guard child route 
   canActivateChild(childRoute: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
   {
     return this.canActivate(childRoute, state);
   }

}
