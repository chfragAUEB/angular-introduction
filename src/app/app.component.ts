import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Christodoulos';
  lastName = 'Fragkoudakis';

  person: Person = {
    givenName: 'Christodoulos',
    surName: 'Fragkoudakis',
    age: 0x37,
    email: 'chfrag@aueb.gr',
    address: 'Athens, Greece',
  };

  person2: Person = {
    givenName: 'fff',
    surName: 'vv',
    age: 0x37,
    email: 'chfrvvvvag@aueb.gr',
    address: ', Greece',
  };
}
