import { Component } from '@angular/core';
export interface User {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css'],
})
export class ComponentInputOutputComponent {
  userData: User[] = [
    { firstName: 'John', lastName: 'Doe', age: 20 },
    { firstName: 'Jane', lastName: 'Smith', age: 19 },
    { firstName: 'Joe', lastName: 'Scmoe', age: 33 },
    { firstName: 'Jane', lastName: 'Brown', age: 44 },
    { firstName: 'Barb', lastName: 'White', age: 33 },
  ];

  onDeleteUser(index: number) {
    console.log(index);
    this.userData.splice(index, 1);
  }
}
