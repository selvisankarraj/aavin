import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericCrudService } from './generic-crud.service';
import { Role } from '../../models/role.model';
@Injectable({
  providedIn: 'root'
})
export class RoleService extends GenericCrudService<Role> {
  private apiUrl = 'api/role'; // Adjust the API endpoint as necessary

  constructor(protected http: HttpClient) {
    super(http, 'role');
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }

  createRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, role);
  }

  deleteRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}