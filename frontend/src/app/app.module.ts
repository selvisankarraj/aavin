import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// Import your standalone components
import { UserManagementComponent } from './screens/user-management/user-management.component';
import { RoleManagementComponent } from './screens/role-management/role-management.component';
import { RoleMappingComponent } from './screens/role-mapping/role-mapping.component';
import { InventoryComponent } from './screens/inventory/inventory.component';

@NgModule({
  declarations: [
    // Only non-standalone components, directives, pipes
  ],
  imports: [
    BrowserModule,
    AppComponent, // Standalone component
    UserManagementComponent,
    RoleManagementComponent,
    RoleMappingComponent,
    InventoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }