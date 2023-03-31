import { Component } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent {
  paragraph = new LoremIpsum().generateParagraphs(1);
  paragraphVisible = true;

  userData: User[] = [
    { firstName: 'John', lastName: 'Doe', age: 20 },
    { firstName: 'Jane', lastName: 'Smith', age: 19 },
    { firstName: 'Joe', lastName: 'Scmoe', age: 33 },
    { firstName: 'Jane', lastName: 'Brown', age: 44 },
  ];

  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible;
  }
}
