import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Person } from './interfaces/person';
import { DeleteUserComponent } from './crud-demo/crud/delete-user/delete-user.component';

const API = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class AppService {
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
}
