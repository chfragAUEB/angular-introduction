import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Joke } from '../app.interfaces';

@Component({
  selector: 'app-chuck-norris-joke',
  templateUrl: './chuck-norris-joke.component.html',
  styleUrls: ['./chuck-norris-joke.component.css'],
})
export class ChuckNorrisJokeComponent implements OnInit {
  joke = '';
  categorizedJoke = '';
  jokeCategories: string[] = [];
  selectedCategory = '';

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.getChuckNorrisJoke().subscribe((joke: Joke) => {
      console.log(joke.value);
      this.joke = joke.value;
    });
    this.getJokeCategories();
  }

  refreshJoke() {
    this.service
      .getChuckNorrisJoke()
      .subscribe((joke) => (this.joke = joke.value));
  }

  getJokeCategories() {
    this.service.getChuckNorrisJokeCategories().subscribe((categories) => {
      console.log(categories);
      this.jokeCategories = categories;
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.service
      .getChuckNorrisJokeFromCategory(this.selectedCategory)
      .subscribe((joke) => (this.categorizedJoke = joke.value));
  }
}
