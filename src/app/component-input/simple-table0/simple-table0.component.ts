import { Component, Input } from '@angular/core';
import { User } from '../component-input.component';

@Component({
  selector: 'app-simple-table0',
  templateUrl: './simple-table0.component.html',
  styleUrls: ['./simple-table0.component.css'],
})
export class SimpleTable0Component {
  @Input() userData: User[] = [];
}
