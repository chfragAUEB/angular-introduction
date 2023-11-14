import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from 'src/app/reactive-form/reactive-form.component';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';
import { CrudUserFormComponent } from '../../utils/crud-user-form/crud-user-form.component';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, CrudUserFormComponent, MatCardModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  constructor(
    private appService: AppService = Inject(AppService),
    private router: Router
  ) {}

  onUser(user: Person) {
    this.appService.addUser(user).subscribe((user) => {
      console.log(user);
      this.router.navigate(['/crud-demo/list']);
    });
  }
}
