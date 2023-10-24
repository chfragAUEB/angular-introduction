import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from '../crud/create-user/create-user.component';
import { ReadUserComponent } from '../crud/read-user/read-user.component';
import { UpdateUserComponent } from '../crud/update-user/update-user.component';
import { DeleteUserComponent } from '../crud/delete-user/delete-user.component';
import { ListUsersComponent } from '../utils/list-users/list-users.component';

@Component({
  selector: 'app-crud-demo',
  standalone: true,
  imports: [
    CommonModule,
    CreateUserComponent,
    ReadUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ListUsersComponent,
  ],
  templateUrl: './crud-demo.component.html',
  styleUrls: ['./crud-demo.component.css'],
})
export class CrudDemoComponent {
  crudOperation: string | undefined;

  onSelection(operation: string) {
    this.crudOperation = operation;
  }

  listUsers() {
    this.crudOperation = 'list';
  }
}
