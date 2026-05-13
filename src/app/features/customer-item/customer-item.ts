import { Component, input, output } from '@angular/core';
import { ICustomer } from '../interfaces/customer.interface';
import { ButtonTrash } from "../../shared/ui/button-trash/button-trash";

@Component({
  selector: 'app-customer-item',
  imports: [],
  templateUrl: './customer-item.html',
  styleUrl: './customer-item.css',
})
export class CustomerItem {

  readonly customer = input.required<ICustomer>();
    userDeleted = output<string>();

  deleteUser(){
  this.userDeleted.emit(this.customer().fullName);
}

}
