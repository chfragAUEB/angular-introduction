import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Christodoulos';
  lastName = 'Fragkoudakis';

  person = {
    givenName: 'Christodoulos',
    surName: 'Fragkoudakis',
    age: 0x37,
    email: 'chfrag@aueb.gr',
  };
}
