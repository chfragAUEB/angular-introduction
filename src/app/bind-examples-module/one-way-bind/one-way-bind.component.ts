import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-bind',
  templateUrl: './one-way-bind.component.html',
  styleUrls: ['./one-way-bind.component.css'],
})
export class OneWayBindComponent {
  imageURL = 'https://picsum.photos/200';
  imageALT = 'An image from picsum photos';
  imageTooltip = this.imageALT;

  buttonDisabled = false;
  buttonPrompt = 'Click me';
}
