import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    //FormsModule,//Don't need for Reactive, required for TD 
    HttpModule,
    //ReactiveFormsModule //Required for Reactive approach
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
