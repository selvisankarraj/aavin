import { User } from "./user.model";
import { Role } from "./role.model";

export interface RoleMapping {
  id: number;
  userId: number;
  roleId: number;

  // Navigation properties (optional)
  user?: User;
  role?: Role;
}