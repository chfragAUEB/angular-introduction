import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-danger-are-you-sure',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './danger-are-you-sure.component.html',
  styleUrls: ['./danger-are-you-sure.component.css'],
})
export class DangerAreYouSureComponent {
  @Input() header = 'Destructive Action!';
  @Input() title = 'Are you sure?';
  @Input() body = 'Are you sure you want to do this?';

  @Output() confirm = new EventEmitter<boolean>();

  onClick(iamSure: boolean) {
    this.confirm.emit(iamSure);
  }
}
