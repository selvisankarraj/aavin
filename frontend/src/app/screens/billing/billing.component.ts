import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingService } from 'src/app/core/services/api/billing.service';
import { InventoryService } from 'src/app/core/services/api/inventory.service';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ]
})
export class BillingComponent {
  billings: any[] = [];
  newBilling: any = {
    item: '',
    quantity: 0,
    price: 0,
    total: 0
  };
  inventoryItems: any[] = [];

  constructor(
    private billingService: BillingService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    this.loadBillings();
    this.loadInventoryItems();
  }

  loadBillings() {
    this.billingService.getAll().subscribe(data => {
      this.billings = data;
    });
  }

  loadInventoryItems() {
    this.inventoryService.getAll().subscribe(data => {
      this.inventoryItems = data;
    });
  }

  createBilling() {
    this.newBilling.total = this.newBilling.quantity * this.newBilling.price;
    this.billingService.create(this.newBilling).subscribe(billing => {
      this.billings.push(billing);
      this.resetNewBilling();
    });
  }

  resetNewBilling() {
    this.newBilling = {
      item: '',
      quantity: 0,
      price: 0,
      total: 0
    };
  }
}