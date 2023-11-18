import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(
    private appService: AppService = Inject(AppService),
    private jwtHelper: JwtHelperService = Inject(JwtHelperService),
    private router: Router
  ) {}

  canActivate() {
    console.log(
      'AUTHGUARD',
      this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'))
    );
    if (
      this.appService.isLoggedIn.value &&
      !this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'))
    ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
