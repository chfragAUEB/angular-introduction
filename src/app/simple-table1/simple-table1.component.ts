import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../app.interfaces';

@Component({
  selector: 'app-simple-table1',
  templateUrl: './simple-table1.component.html',
  styleUrls: ['./simple-table1.component.css'],
})
export class SimpleTable1Component {
  @Input() userData: User[] = [];
  @Output() deleteUser = new EventEmitter<number>();
  @Output() sendUser = new EventEmitter<User>();

  onDeleteButtonClick(i: number) {
    this.deleteUser.emit(i);
  }

  onSendUserButtonClick(user: User) {
    this.sendUser.emit(user);
  }
}
