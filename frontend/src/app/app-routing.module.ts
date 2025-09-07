import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { UserManagementComponent } from './screens/user-management/user-management.component';
import { RoleManagementComponent } from './screens/role-management/role-management.component';
import { RoleMappingComponent } from './screens/role-mapping/role-mapping.component';
import { BillingComponent } from './screens/billing/billing.component';
import { InventoryComponent } from './screens/inventory/inventory.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuard] },
  { path: 'role-management', component: RoleManagementComponent, canActivate: [AuthGuard] },
  { path: 'role-mapping', component: RoleMappingComponent, canActivate: [AuthGuard] },
  { path: 'billing', component: BillingComponent, canActivate: [AuthGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }