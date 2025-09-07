import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/core/services/api/inventory.service';
// Update the import path below if the actual path is different
// Update the import path below to the correct location of inventory.model.ts
// Update the import path below to the correct location of inventory.model.ts
import { Inventory } from 'src/app/core/models/inventory.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ]
})
export class InventoryComponent implements OnInit {
  inventories: Inventory[] = [];
  newInventory: Inventory = {
    id: 0, itemName: '', quantity: 0, price: 0,
    description: ''
  };

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadInventories();
  }

  loadInventories(): void {
    this.inventoryService.getAll().subscribe(data => {
      this.inventories = data;
    });
  }

  addInventory(): void {
    this.inventoryService.create(this.newInventory).subscribe(data => {
      this.inventories.push(data);
      this.newInventory = { id: 0, itemName: '', quantity: 0, price: 0, description: '' }; // Reset form
    });
  }

  deleteInventory(id: number): void {
    this.inventoryService.delete(id).subscribe(() => {
      this.inventories = this.inventories.filter(inv => inv.id !== id);
    });
  }
}