import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chuck-norris-joke',
  templateUrl: './chuck-norris-joke.component.html',
  styleUrls: ['./chuck-norris-joke.component.css'],
})
export class ChuckNorrisJokeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getJoke();
  }

  getJoke() {
    this.http
      .get('https://api.chucknorris.io/jokes/random')
      .subscribe((joke) => {
        {
          iconURL, value;
        }
        console.log(joke);
      });
  }
}
