import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/core/services/api/role.service';
import { Role } from 'src/app/core/models/role.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss'],
  standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ]
})
export class RoleManagementComponent implements OnInit {
  roles: Role[] = [];
  newRole: Role = { id: 0, name: '' }; // Assuming Role has an id and name property

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roleService.getAll().subscribe((data: Role[]) => {
      this.roles = data;
    });
  }

  createRole(): void {
    this.roleService.create(this.newRole).subscribe((role: Role) => {
      this.roles.push(role);
      this.newRole = { id: 0, name: '' }; // Reset new role
    });
  }

  deleteRole(roleId: number): void {
    this.roleService.delete(roleId).subscribe(() => {
      this.roles = this.roles.filter(role => role.id !== roleId);
    });
  }
}