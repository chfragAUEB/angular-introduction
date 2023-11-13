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

@Component({
  selector: 'app-crud-user-search',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './crud-user-search.component.html',
  styleUrls: ['./crud-user-search.component.css'],
})
export class CrudUserSearchComponent {
  foundUser: Person | undefined;
  userNotFound = false;
  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>;
  @Output() userFound = new EventEmitter<Person | undefined>();

  constructor(private appService: AppService = Inject(AppService)) {}

  onSearch() {
    const id = this.userIdInput.nativeElement.value;
    this.appService.getUserById(parseInt(id)).subscribe({
      next: (user) => {
        console.log(user);
        this.foundUser = user;
        this.userNotFound = false;
        this.userFound.emit(this.foundUser);
      },
      error: (error) => {
        this.foundUser = undefined;
        this.userNotFound = true;
        console.log(error);
        this.userFound.emit(this.foundUser);
      },
      complete: () => {
        console.log('Operation Completed');
      },
    });
  }
}
