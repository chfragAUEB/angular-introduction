import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Person } from './interfaces/person';
import { DeleteUserComponent } from './crud-demo/crud/delete-user/delete-user.component';
import { Credentials } from './interfaces/credentials';
import { JWTToken } from './interfaces/jwttoken';
import { BehaviorSubject } from 'rxjs';

const API = 'http://localhost:3000/users';
const NETSTJS_API = 'http://localhost:3001';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  fullname = new BehaviorSubject<string>('');

  constructor(private http: HttpClient = inject(HttpClient)) {}

  getAllUsers() {
    return this.http.get<Person[]>(API);
  }

  getUserById(id: number) {
    return this.http.get<Person>(`${API}/${id}`);
  }

  addUser(user: Person) {
    return this.http.post<Person>('http://localhost:3000/users', user);
  }

  deleteUser(id: number) {
    return this.http.delete<Person>(`http://localhost:3000/users/${id}`);
  }

  updateUser(user: Person) {
    console.log('SERVICE', user);
    return this.http.put<Person>(`${API}/${user.id}`, user);
  }

  // NestJS calls

  login(credentials: Credentials) {
    return this.http.post<JWTToken>(`${NETSTJS_API}/auth/login`, credentials);
  }

  logout() {
    this.isLoggedIn.next(false);
    this.fullname.next('');
    localStorage.removeItem('access_token');
  }
}
