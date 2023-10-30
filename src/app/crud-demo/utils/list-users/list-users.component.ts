import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatCardModule],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;

  users: Person[] = [];
  dataSource!: MatTableDataSource<Person>;

  mobileColumns: string[] = ['id', 'givenName', 'surName', 'photoURL'];
  tabletColumns: string[] = ['id', 'givenName', 'surName', 'age', 'photoURL'];
  desktopColumns: string[] = [
    'id',
    'givenName',
    'surName',
    'age',
    'email',
    'address',
    'photoURL',
  ];
  displayedColumns: string[] = this.desktopColumns;

  constructor(
    private appService: AppService = Inject(AppService),
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.appService.getAllUsers().subscribe((users) => {
      this.users = users;

      this.dataSource = new MatTableDataSource<Person>(this.users);
      this.dataSource.sort = this.sort;
    });

    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.displayedColumns = this.mobileColumns;
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.displayedColumns = this.tabletColumns;
        } else if (result.breakpoints[Breakpoints.Medium]) {
          this.displayedColumns = this.tabletColumns;
        } else if (result.breakpoints[Breakpoints.Large]) {
          this.displayedColumns = this.desktopColumns;
        } else if (result.breakpoints[Breakpoints.XLarge]) {
          this.displayedColumns = this.desktopColumns;
        }
      });
  }
}
