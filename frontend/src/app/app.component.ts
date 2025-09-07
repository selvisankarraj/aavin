// src/app/app.component.ts
import { Component } from '@angular/core';
import { LoginComponent } from './screens/login/login.component';
import { BillingComponent } from './screens/billing/billing.component';
import { InventoryComponent } from './screens/inventory/inventory.component';
import { RoleManagementComponent } from './screens/role-management/role-management.component';
import { RoleMappingComponent } from './screens/role-mapping/role-mapping.component';
import { UserManagementComponent } from './screens/user-management/user-management.component';

@Component({
  selector: 'app-root',
  template: `
    <app-login></app-login>
   
  `,
  styles: [],
  imports: [LoginComponent, BillingComponent, InventoryComponent, RoleManagementComponent, RoleMappingComponent, UserManagementComponent]
})
export class AppComponent { }