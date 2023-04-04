import { Component } from '@angular/core';
import { SideBar } from './app.interfaces';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Introduction';

  sideBarMenu: SideBar[] = [
    { text: 'Greeting', path: 'greeting' },
    { text: 'One way bind', path: 'one-way-bind' },
    { text: 'Event bind', path: 'event-bind' },
    { text: 'Two way bind', path: 'two-way-bind' },
    { text: 'Structural Directives', path: 'structural-directives' },
    { text: 'Template Variables', path: 'template-variables' },
    { text: 'Component Input', path: 'component-input' },
    { text: 'Component Input Output', path: 'component-input-output' },
    { text: 'Template Forms', path: 'template-forms' },
    { text: 'Reactive Forms', path: 'reactive-forms' },
    { text: 'Chuck Norris Joke', path: 'chuck-norris' },
  ];

  currentPath = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: Event) => {
        console.log(event.constructor.name, this.router.url.substring(1));
        this.currentPath = this.router.url.substring(1);
      });
  }
}
