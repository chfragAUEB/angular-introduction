import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';

import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ComponentInputComponent } from './component-input/component-input.component';
import { SimpleTable0Component } from './simple-table0/simple-table0.component';
import { ComponentInputOutputComponent } from './component-input-output/component-input-output.component';
import { SimpleTable1Component } from './simple-table1/simple-table1.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path: 'bind-examples',

    loadChildren: () =>
      import('./bind-examples-module/bind-examples.module').then(
        (m) => m.BindExamplesModule
      ),
  },
  { path: 'greeting', component: GreetingComponent },
  { path: 'structural-directives', component: StructuralDirectivesComponent },
  { path: 'template-variables', component: TemplateVariablesComponent },
  { path: 'component-input', component: ComponentInputComponent },
  { path: 'component-input-output', component: ComponentInputOutputComponent },
  { path: 'template-forms', component: TemplateFormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'chuck-norris-joke', component: ChuckNorrisComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,

    TemplateVariablesComponent,
    StructuralDirectivesComponent,
    ComponentInputComponent,
    SimpleTable0Component,
    ComponentInputOutputComponent,
    SimpleTable1Component,
    WelcomeComponent,
    PageNotFoundComponent,
    SideBarComponent,
    ChuckNorrisComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
