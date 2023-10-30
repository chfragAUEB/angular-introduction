import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-event-bind',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css'],
})
export class EventBindComponent {
  times: number = 0;
  userInput: string = 'Type Something';

  increaseCounter() {
    this.times += 1;
  }

  resetCounter() {
    this.times = 0;
  }

  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
  }
}
