import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css'],
})
export class TemplateVariablesComponent {
  // @ViewChild('userInput') userInput: ElementRef | undefined;
  @ViewChild('userInput') userInput: any;
  // log(input: string) {
  //   console.log(input);
  // }
  log() {
    // Detemine type during development ONLY
    console.log(this.userInput.constructor.name);
    if (this.userInput) {
      const target = this.userInput.nativeElement as HTMLInputElement;
      target.title = target.value;
      console.log(target.value);
    }
  }
}
