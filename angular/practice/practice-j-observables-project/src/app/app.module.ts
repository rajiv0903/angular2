import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
/**
 * Observable- Various Data Source 
 * Observer- Handle Data, Handle Error, Handle Completion 
 * http request , User input etc. are Observable
 * Data Source are asynchronous task - We don't know how long will it take
 * We can use - Call Back or Promises - But it is an alternative and Angular use a lot
 */
export class AppModule { }
