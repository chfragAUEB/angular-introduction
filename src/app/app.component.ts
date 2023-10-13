import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './interfaces/person';

import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
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
    givenName: 'Giorgos',
    surName: 'Chatzidimitrakopoulos',
    age: 22,
    email: 'chatzi@aueb.gr',
    address: 'Athens, Greece',
  };
}
