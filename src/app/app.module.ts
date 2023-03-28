import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { OneWayBindComponent } from './one-way-bind/one-way-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    OneWayBindComponent,
    EventBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
