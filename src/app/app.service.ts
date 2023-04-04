import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from './app.interfaces';
import { Observable } from 'rxjs';

const CHUCK_NORRIS_API = 'https://api.chucknorris.io/jokes';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getChuckNorrisJoke(): Observable<Joke> {
    return this.http.get<Joke>(`${CHUCK_NORRIS_API}/random`);
  }

  getChuckNorrisJokeCategories() {
    return this.http.get<string[]>(`${CHUCK_NORRIS_API}/categories`);
  }

  getChuckNorrisJokeFromCategory(category: string) {
    return this.http.get<Joke>(
      `${CHUCK_NORRIS_API}/random?category=${category}`
    );
  }
}
