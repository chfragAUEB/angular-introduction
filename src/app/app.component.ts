import { Component } from '@angular/core';
import { SideBar } from './app.interfaces';
import { Router } from '@angular/router';

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
    { text: 'Event Bind', path: 'event-bind' },
    { text: 'Two way Bind', path: 'two-way-bind' },
    { text: 'Structural Directives', path: 'structural-directives' },
    { text: 'Template Variables', path: 'template-variables' },
    { text: 'Component Input', path: 'component-input' },
    { text: 'Component Input Output', path: 'component-input-output' },
    { text: 'Template Forms', path: 'template-forms' },
    { text: 'Reactive Forms', path: 'reactive-forms' },
    { text: 'Chuck Norris Joke', path: 'chuck-norris-joke' },
  ];

  currentPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      console.log(this.router.url.substring(1));
      this.currentPath = this.router.url.substring(1);
    });
  }
}
