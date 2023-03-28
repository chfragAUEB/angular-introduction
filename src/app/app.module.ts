import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { OneWayBindComponent } from './one-way-bind/one-way-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    OneWayBindComponent,
    EventBindComponent,
    TwoWayBindComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
