import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [
    CommonModule,
    PersonCardComponent,
    CrudUserSearchComponent,
    MatCardModule,
  ],
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css'],
})
export class ReadUserComponent {
  foundUser: Person | undefined;

  constructor(private appService: AppService = Inject(AppService)) {}

  onUserFound(user: Person | undefined) {
    if (user) {
      this.foundUser = user;
      console.log('onUserFound', this.foundUser);
    } else {
      this.foundUser = undefined;
    }
  }
}
