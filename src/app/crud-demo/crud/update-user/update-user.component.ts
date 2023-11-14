import { Component, EventEmitter, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { Person } from 'src/app/interfaces/person';
import { CrudUserFormComponent } from '../../utils/crud-user-form/crud-user-form.component';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    CommonModule,
    CrudUserSearchComponent,
    CrudUserFormComponent,
    MatCardModule,
  ],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  foundUser: Person | undefined;

  constructor(
    private appService: AppService = Inject(AppService),
    private router: Router
  ) {}

  onUserFound(user: Person | undefined) {
    if (user) {
      this.foundUser = user;
      console.log('onUserFound', this.foundUser);
    } else {
      this.foundUser = undefined;
    }
  }

  onUpdate(user: Person) {
    console.log('onUpdate', user);
    this.appService.updateUser(user).subscribe((user) => {
      console.log(user);
      this.router.navigate(['/crud-demo/list']);
    });
  }
}
