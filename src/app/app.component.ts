import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationLayoutComponent } from './application-layout/application-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ApplicationLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
