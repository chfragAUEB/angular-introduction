import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from './app.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getJoke(): Observable<Joke> {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');
  }
}
