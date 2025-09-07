import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenericCrudService } from './generic-crud.service';
import { Billing } from '../../models/billing.model';

@Injectable({
  providedIn: 'root'
})
export class BillingService extends GenericCrudService<Billing> {
    private readonly apiUrl = 'api/billing';

    constructor(protected override http: HttpClient) {
        super(http, 'api/billing');
    }

    getBillings(): Observable<Billing[]> {
        return this.http.get<Billing[]>(this.apiUrl);
    }

    getBillingById(id: number): Observable<Billing> {
        return this.http.get<Billing>(`${this.apiUrl}/${id}`);
    }

    createBilling(billing: Billing): Observable<Billing> {
        return this.http.post<Billing>(this.apiUrl, billing);
    }

    updateBilling(id: number, billing: Billing): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, billing);
    }

    deleteBilling(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}