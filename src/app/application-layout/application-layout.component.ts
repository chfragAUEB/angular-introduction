import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-application-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    RouterModule,
  ],
  templateUrl: './application-layout.component.html',
  styleUrls: ['./application-layout.component.css'],
})
export class ApplicationLayoutComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isLoggedIn$ = this.appService.isLoggedIn;
  fullname$ = this.appService.fullname;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService = Inject(AppService)
  ) {}

  logout() {
    this.appService.logout();
  }
}
