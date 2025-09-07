import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(credentials: { username: string; password: string }): Observable<any> {
    // Dummy authentication logic for demonstration
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      return of({ success: true });
    } else {
            return throwError(() => new Error('Invalid username or password'));
          }
        }
      }