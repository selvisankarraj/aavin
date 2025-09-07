import { RoleMapping } from "./rolemapping.model";

export interface User {
  id: number;
  username: string;
  password?: string; // It's best practice not to expose the password to the front-end
  email: string;

  // Navigation property (optional)
  roleMappings?: RoleMapping[];
}