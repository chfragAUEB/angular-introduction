import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { EventBindComponent } from './event-bind/event-bind.component';

export const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'event-bind', component: EventBindComponent },
];
