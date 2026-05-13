import { Component, input } from '@angular/core';
import { ICustomer } from '../interfaces/customer.interface';
import { ButtonTrash } from "../../shared/ui/button-trash/button-trash";

@Component({
  selector: 'app-customer-item',
  imports: [ButtonTrash],
  templateUrl: './customer-item.html',
  styleUrl: './customer-item.css',
})
export class CustomerItem {
  readonly customer = input.required<ICustomer>()
}
