import { Inventory } from "./inventory.model";
import { User } from "./user.model";

export interface Billing {
  id: number;
  billingDate: Date;
  totalAmount: number;
  userId: number;
  inventoryId: number;

  // Navigation properties (optional, depending on your API's serialization)
  user?: User; 
  inventory?: Inventory;
}