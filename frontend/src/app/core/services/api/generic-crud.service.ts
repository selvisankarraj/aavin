import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class GenericCrudService<T> {
    private baseUrl: string;

    constructor(protected http: HttpClient, private endpoint: string) {
        this.baseUrl = `api/${endpoint}`;
    }

    create(item: T): Observable<T> {
        return this.http.post<T>(this.baseUrl, item);
    }

    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.baseUrl);
    }

    getById(id: number): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${id}`);
    }

    update(id: number, item: T): Observable<void> {
        return this.http.put<void>(`${this.baseUrl}/${id}`, item);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}