import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericCrudService } from './generic-crud.service';
import { Inventory } from '../../models/inventory.model';


@Injectable({
  providedIn: 'root'
})
export class InventoryService extends GenericCrudService<Inventory> {
    private readonly apiUrl = 'api/inventory';

    constructor(protected override http: HttpClient) {
        super(http, 'api/inventory');
    }

    getInventorys(): Observable<Inventory[]> {
        return this.http.get<Inventory[]>(this.apiUrl);
    }

    getInventoryById(id: number): Observable<Inventory> {
        return this.http.get<Inventory>(`${this.apiUrl}/${id}`);
    }

    createInventory(inventory: Inventory): Observable<Inventory> {
        return this.http.post<Inventory>(this.apiUrl, inventory);
    }

    updateInventory(id: number, inventory: Inventory): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, inventory);
    }

    deleteInventory(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}