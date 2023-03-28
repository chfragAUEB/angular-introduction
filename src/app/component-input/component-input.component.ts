import { Component } from '@angular/core';

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
    { firstName: 'Joe', lastName: 'Schmoe', age: 33 },
    { firstName: 'Jane', lastName: 'Brown', age: 44 },
  ];
}
