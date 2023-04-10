import { Component } from '@angular/core';
import { SideBar as MenuEntry } from './app.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Introduction';

  sideBarMenu: MenuEntry[] = [
    { text: 'Greeting', path: 'greeting' },

    { text: 'Structural Directives', path: 'structural-directives' },
    { text: 'Template Variables', path: 'template-variables' },
    { text: 'Component Input', path: 'component-input' },
    { text: 'Component Input Output', path: 'component-input-output' },
    { text: 'Template Forms', path: 'template-forms' },
    { text: 'Reactive Forms', path: 'reactive-forms' },
    { text: 'Chuck Norris Joke', path: 'chuck-norris-joke' },
  ];

  topBindExamplesMenu: MenuEntry[] = [
    { text: 'One way bind', path: 'bind-examples/one-way-bind' },
    { text: 'Event Bind', path: 'bind-examples/event-bind' },
    { text: 'Two way Bind', path: 'bind-examples/two-way-bind' },
  ];

  currentPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      console.log(this.router.url.substring(1));
      this.currentPath = this.router.url.substring(1);
    });
  }
}
