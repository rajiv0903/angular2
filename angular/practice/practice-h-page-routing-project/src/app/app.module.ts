import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './services/server/servers.service';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

/**
 * Based on path component gets loaded
 * Nested route with children
 */
// const appRoutes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'users', component: UsersComponent, children: [
//     {path: ':id/:name', component: UserComponent}, //Routing params Loging single user component
//   ]},
//   {path: 'servers', component: ServersComponent, children: [
//     {path: ':id', component: ServerComponent},
//     {path: ':id/edit', component: EditServerComponent}, //Query Paramars
//   ]},
//   //Make sure this is the last
//   {path:"not-found", component: PageNotFoundComponent}, //wrong URL
//   {path:"**", redirectTo: '/not-found'} //wrong URL redirect
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //RouterModule.forRoot(appRoutes) //register route
    AppRoutingModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

