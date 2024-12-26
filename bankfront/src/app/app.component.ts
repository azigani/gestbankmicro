import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  code: string;
  name: string;
  inventoryStatus: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  product?: Product;
  statuses: any[] = [];
  selectedProduct: Product | null = null;
  editing: boolean = false;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.products = [
      { id: 1, code: 'P001', name: 'Product 1', inventoryStatus: 'In Stock', price: 100 },
      { id: 2, code: 'P002', name: 'Product 2', inventoryStatus: 'Out of Stock', price: 150 },
      { id: 3, code: 'P003', name: 'Product 3', inventoryStatus: 'Low Stock', price: 200 }
    ];

    this.statuses = [
      { label: 'In Stock', value: 'In Stock' },
      { label: 'Out of Stock', value: 'Out of Stock' },
      { label: 'Low Stock', value: 'Low Stock' }
    ];
  }

  onRowEditInit(product: Product) {
    this.selectedProduct = { ...product }; // Crée une copie de l'objet à modifier
    this.editing = true;
  }

  onRowEditSave(product: Product) {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = { ...product };
    }
    this.editing = false;
  }

  onRowEditCancel(product: Product, rowIndex: number) {
    this.products[rowIndex] = { ...this.selectedProduct! };
    this.editing = false;
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content Here!'});
  }

  showError() {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong!'});
  }

}
