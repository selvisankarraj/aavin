import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericCrudService } from './generic-crud.service';
import { User } from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericCrudService<User> {
  private apiUrl = 'api/user'; // Adjust the API endpoint as necessary

  constructor(protected http: HttpClient) {
    super(http, 'user');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}