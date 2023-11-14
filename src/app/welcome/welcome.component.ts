import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  isLoggedIn$ = this.appService.isLoggedIn;
  constructor(
    private appService: AppService = Inject(AppService),
    private router: Router = Inject(Router)
  ) {}

  logout() {
    this.appService.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
