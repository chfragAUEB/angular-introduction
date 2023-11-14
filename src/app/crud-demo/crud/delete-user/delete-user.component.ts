import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';
import { DangerAreYouSureComponent } from '../../utils/danger-are-you-sure/danger-are-you-sure.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [
    CommonModule,
    CrudUserSearchComponent,
    PersonCardComponent,
    DangerAreYouSureComponent,
    MatCardModule,
  ],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  foundUser: Person | undefined;
  userNotFound = false;
  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>;

  constructor(
    private appService: AppService = Inject(AppService),
    private http: HttpClient = Inject(HttpClient),
    private router: Router = Inject(Router)
  ) {}

  onClick() {
    const id = this.userIdInput.nativeElement.value;

    this.http.delete<Person>(`http://localhost:3000/users/${id}`).subscribe({
      next: (user) => {
        console.log(user);
        this.userNotFound = false;
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

  onUserFound(user: Person | undefined) {
    if (user) {
      this.foundUser = user;
    }
  }

  onConfirm(iamSure: boolean) {
    if (iamSure && this.foundUser) {
      const id = this.foundUser.id ?? -1;
      this.appService.deleteUser(id).subscribe({
        next: (user) => {
          console.log(user);
          this.userNotFound = false;
          this.router.navigate(['/crud-demo/list']);
        },
        error: (error) => {
          console.log(error);
          this.userNotFound = true;
        },
        complete: () => {
          'Delete operation completed';
        },
      });
    } else {
      this.foundUser = undefined;
    }
  }
}
