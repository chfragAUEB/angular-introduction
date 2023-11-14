import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-crud-user-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  templateUrl: './crud-user-search.component.html',
  styleUrls: ['./crud-user-search.component.css'],
})
export class CrudUserSearchComponent {
  foundUser: Person | undefined;
  @Output() userFound = new EventEmitter<Person | undefined>();

  form = new FormGroup({
    id: new FormControl(0),
  });

  constructor(private appService: AppService = Inject(AppService)) {}

  onSearch() {
    const id = this.form.controls.id.value ?? 0;
    this.appService.getUserById(id).subscribe({
      next: (user) => {
        console.log(user);
        this.foundUser = user;
        this.userFound.emit(this.foundUser);
      },
      error: (error) => {
        this.foundUser = undefined;
        console.log(this.foundUser);
        this.userFound.emit(this.foundUser);
      },
      complete: () => {
        console.log('Operation Completed');
      },
    });
  }
}
