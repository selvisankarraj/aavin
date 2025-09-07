import { Component, OnInit } from '@angular/core';
import { RoleMappingService } from 'src/app/core/services/api/role-mapping.service';
import { RoleMapping } from 'src/app/core/models/rolemapping.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-role-mapping',
  templateUrl: './role-mapping.component.html',
  styleUrls: ['./role-mapping.component.scss'],
  standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ]
})
export class RoleMappingComponent implements OnInit {
  roleMappings: RoleMapping[] = [];
  selectedRoleMapping: RoleMapping | null = null;

  constructor(private roleMappingService: RoleMappingService) {}

  ngOnInit(): void {
    this.loadRoleMappings();
  }

  loadRoleMappings(): void {
    this.roleMappingService.getAll().subscribe(
      (data: RoleMapping[]) => {
        this.roleMappings = data;
      },
      (error) => {
        console.error('Error loading role mappings', error);
      }
    );
  }

  createRoleMapping(roleMapping: RoleMapping): void {
    this.roleMappingService.create(roleMapping).subscribe(
      (newRoleMapping: RoleMapping) => {
        this.roleMappings.push(newRoleMapping);
        this.selectedRoleMapping = null;
      },
      (error) => {
        console.error('Error creating role mapping', error);
      }
    );
  }

  updateRoleMapping(roleMapping: RoleMapping): void {
    this.roleMappingService.update(roleMapping.id, roleMapping).subscribe(
      () => {
        const index = this.roleMappings.findIndex(rm => rm.id === roleMapping.id);
        if (index !== -1) {
          this.roleMappings[index] = roleMapping;
        }
        this.selectedRoleMapping = null;
      },
      (error) => {
        console.error('Error updating role mapping', error);
      }
    );
  }

  deleteRoleMapping(id: number): void {
    this.roleMappingService.delete(id).subscribe(
      () => {
        this.roleMappings = this.roleMappings.filter(rm => rm.id !== id);
      },
      (error) => {
        console.error('Error deleting role mapping', error);
      }
    );
  }

  selectRoleMapping(roleMapping: RoleMapping): void {
    this.selectedRoleMapping = { ...roleMapping };
  }

  cancelEdit(): void {
    this.selectedRoleMapping = null;
  }
}