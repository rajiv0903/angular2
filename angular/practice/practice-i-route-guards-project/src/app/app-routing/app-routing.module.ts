import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule} from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { ServersComponent } from '../servers/servers.component';
import { UserComponent } from '../users/user/user.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { ServerComponent } from '../servers/server/server.component';

import { ServersService } from '../services/server/servers.service';

import { PageNotFoundComponent } from '../errors/page-not-found/page-not-found.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

import { AuthGuardService } from '../guard/auth-guard.service';
import { CanDeactivateGuard } from '../guard/accidental-navigate-guard';

import { ServerResolverService } from '../resolver/server-resolver.service';


/**
 * Based on path component gets loaded
 * Nested route with children
 */
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}, //Routing params Loging single user component
  ]},
  //Auth Guard - How many Guard you want to give
  { 
    path: 'servers', 
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent, 
    children: [
      //resolve will make sure load the data before route gets activated
      //Resolve way - Resolving Dynamic Data with resolve Guard
      {path: ':id', component: ServerComponent, resolve:{serverData: ServerResolverService}},
      //Query Paramars
      {path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard]}, 
  ]},
  //Make sure this is the last
  // {path:"not-found", component: PageNotFoundComponent}, //wrong URL 
  {path:"not-found", component: ErrorPageComponent, data:{'message':'Page Not Found!'}},
  {path:"**", redirectTo: '/not-found'} //wrong URL redirect
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes)
    //to inform that after # web container should ignore
    // RouterModule.forRoot(appRoutes, {useHash: true}) 
    RouterModule.forRoot(appRoutes, {useHash: false}) 
  ],
  declarations: [],
  exports: [RouterModule] //to inform this module is available for all- outsource
})
export class AppRoutingModule { }
