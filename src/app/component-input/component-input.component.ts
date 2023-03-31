import { Component } from '@angular/core';
import { orderBy } from 'lodash-es';

export interface User {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['./component-input.component.css'],
})
export class ComponentInputComponent {
  userData: User[] = [
    { firstName: 'John', lastName: 'Doe', age: 20 },
    { firstName: 'Jane', lastName: 'Smith', age: 19 },
    { firstName: 'Joe', lastName: 'Scmoe', age: 33 },
    { firstName: 'Jane', lastName: 'Brown', age: 44 },
    { firstName: 'Barb', lastName: 'White', age: 33 },
  ];

  sortByAgeDesc() {
    this.userData = orderBy(this.userData, ['age'], ['desc']);
  }

  sortByAgeAsc() {
    this.userData = orderBy(this.userData, ['age'], ['asc']);
  }

  sortByAgeDescLastDesc() {
    this.userData = orderBy(
      this.userData,
      ['age', 'lastName'],
      ['desc', 'desc']
    );
  }

  init() {
    this.userData = [
      { firstName: 'John', lastName: 'Doe', age: 20 },
      { firstName: 'Jane', lastName: 'Smith', age: 19 },
      { firstName: 'Joe', lastName: 'Scmoe', age: 33 },
      { firstName: 'Jane', lastName: 'Brown', age: 44 },
      { firstName: 'Barb', lastName: 'White', age: 33 },
    ];
  }
}
