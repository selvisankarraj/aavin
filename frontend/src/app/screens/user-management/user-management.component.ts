import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/api/user.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  newUser: User = {} as User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  createUser(): void {
    this.userService.create(this.newUser).subscribe(user => {
      this.users.push(user);
      this.newUser = {} as User; // Reset newUser
    });
  }

  deleteUser(userId: number): void {
    this.userService.delete(userId).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
    });
  }
}