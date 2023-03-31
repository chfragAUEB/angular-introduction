import { Component, Input } from '@angular/core';
import { SideBar } from '../app.interfaces';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input() menuEntries: SideBar[] = [];
  active = 'greeting';

  onClick(path: string) {
    this.active = path;
  }
}
