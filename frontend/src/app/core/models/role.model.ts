import { RoleMapping } from "./rolemapping.model";

export interface Role {
  id: number;
  name: string;

  // Navigation property (optional)
  roleMappings?: RoleMapping[];
}