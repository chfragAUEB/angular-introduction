import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { OneWayBindComponent } from './one-way-bind/one-way-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ComponentInputComponent } from './component-input/component-input.component';
import { SimpleTable0Component } from './component-input/simple-table0/simple-table0.component';
import { ComponentInputOutputComponent } from './component-input-output/component-input-output.component';
import { SimpleTable1Component } from './component-input-output/simple-table1/simple-table1.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    OneWayBindComponent,
    EventBindComponent,
    TwoWayBindComponent,
    TemplateVariablesComponent,
    StructuralDirectivesComponent,
    ComponentInputComponent,
    SimpleTable0Component,
    ComponentInputOutputComponent,
    SimpleTable1Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
