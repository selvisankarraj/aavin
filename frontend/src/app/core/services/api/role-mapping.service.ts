import { HttpClient } from "@angular/common/http";
import { RoleMapping } from "../../models/rolemapping.model";
import { Observable } from "rxjs";
import { GenericCrudService } from "./generic-crud.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RoleMappingService extends GenericCrudService<RoleMapping> {
    private readonly apiUrl = 'api/roleMapping';

    constructor(protected http: HttpClient) {
        super(http, 'api/roleMapping');
    }

    getRoleMappings(): Observable<RoleMapping[]> {
        return this.http.get<RoleMapping[]>(this.apiUrl);
    }

    getRoleMappingById(id: number): Observable<RoleMapping> {
        return this.http.get<RoleMapping>(`${this.apiUrl}/${id}`);
    }

    createRoleMapping(roleMapping: RoleMapping): Observable<RoleMapping> {
        return this.http.post<RoleMapping>(this.apiUrl, roleMapping);
    }

    updateRoleMapping(id: number, roleMapping: RoleMapping): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, roleMapping);
    }

    deleteRoleMapping(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}