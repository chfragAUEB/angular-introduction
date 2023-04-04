import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from '../app.service';
import { Joke } from '../app.interfaces';

@Component({
  selector: 'app-chuck-norris-joke',
  templateUrl: './chuck-norris-joke.component.html',
  styleUrls: ['./chuck-norris-joke.component.css'],
})
export class ChuckNorrisJokeComponent implements OnInit {
  joke = '';
  constructor(private service: AppService) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    if (event.key === 'r') {
      this.refreshJoke();
    }
  }

  ngOnInit(): void {
    this.service.getJoke().subscribe((joke: Joke) => {
      console.log(joke.value);
      this.joke = joke.value;
    });
  }

  refreshJoke() {
    this.service.getJoke().subscribe((joke: Joke) => (this.joke = joke.value));
  }
}
