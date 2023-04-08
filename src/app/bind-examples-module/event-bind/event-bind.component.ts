import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css'],
})
export class EventBindComponent {
  times = 0;
  userInput = '';

  onPrimaryClick() {
    this.times += 1;
  }

  resetCounter() {
    this.times = 0;
  }

  resetUserInput() {
    this.userInput = '';
  }

  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
  }
}
