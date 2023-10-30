import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { CreateUserComponent } from './crud-demo/crud/create-user/create-user.component';
import { ReadUserComponent } from './crud-demo/crud/read-user/read-user.component';
import { UpdateUserComponent } from './crud-demo/crud/update-user/update-user.component';
import { DeleteUserComponent } from './crud-demo/crud/delete-user/delete-user.component';
import { ListUsersComponent } from './crud-demo/utils/list-users/list-users.component';

export const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'event-bind', component: EventBindComponent },
  { path: 'crud-demo/create', component: CreateUserComponent },
  { path: 'crud-demo/read', component: ReadUserComponent },
  { path: 'crud-demo/update', component: UpdateUserComponent },
  { path: 'crud-demo/delete', component: DeleteUserComponent },
  { path: 'crud-demo/list', component: ListUsersComponent },
];
