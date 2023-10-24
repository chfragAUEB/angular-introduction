import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  @Output() userDeleted = new EventEmitter();
  foundUser: Person | undefined;
  userNotFound = false;
  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>;

  constructor(private appService: AppService = Inject(AppService)) {}

  onClick() {
    const id = this.userIdInput.nativeElement.value;
    this.appService.deleteUser(parseInt(id)).subscribe({
      next: (user) => {
        console.log(user);
        this.userNotFound = false;
        this.userDeleted.emit();
      },
      error: (error) => {
        console.log(error);
        this.userNotFound = true;
      },
      complete: () => {
        'Delete operation completed';
      },
    });
  }
}
