import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { OneWayBindComponent } from './one-way-bind/one-way-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { ComponentInputComponent } from './component-input/component-input.component';
import { SimpleTable0Component } from './component-input/simple-table0/simple-table0.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    OneWayBindComponent,
    EventBindComponent,
    TwoWayBindComponent,
    StructuralDirectivesComponent,
    TemplateVariablesComponent,
    ComponentInputComponent,
    SimpleTable0Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
