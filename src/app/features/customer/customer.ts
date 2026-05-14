import { Component, computed, signal } from '@angular/core';
import { ICustomer } from '../interfaces/customer.interface';
import { form, FormField } from '@angular/forms/signals';
import { CustomerItem } from '../customer-item/customer-item';
import { IconButton } from '../../shared/ui/icon-button/icon-button';
import { Trash } from '../../shared/ui/icons/trash';
import { Pen } from '../../shared/ui/icons/pen';

@Component({
  selector: 'app-customer',
  imports: [FormField, CustomerItem, IconButton, Trash, Pen],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})

export class Customer {
  searchModel = signal<{ text: string }>({
    text: '',
  });
  searchForm = form(this.searchModel);

  customersData: ICustomer[] = [
    {
      fullName: 'Emma Johnson',
      email: 'emma.johnson@example.com',
      phone: '+1-555-0123',
      address: '123 Maple St, Springfield, IL',
      loyalty: 'Gold',
      state: true,
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      fullName: 'Liam Smith',
      email: 'liam.smith@example.com',
      phone: '+1-555-0456',
      address: '45 Oak Ave, Austin, TX',
      loyalty: 'Silver',
      state: true,
      image: 'https://i.pravatar.cc/150?img=2',
    },
    {
      fullName: 'Olivia Brown',
      email: 'olivia.brown@example.com',
      phone: '+1-555-0789',
      address: '9 Pine Rd, Seattle, WA',
      loyalty: 'Platinum',
      state: true,
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      fullName: 'Noah Davis',
      email: 'noah.davis@example.com',
      phone: '+1-555-1011',
      address: '210 Cedar Ln, Denver, CO',
      loyalty: 'Bronze',
      state: true,
      image: 'https://i.pravatar.cc/150?img=4',
    },
    {
      fullName: 'Ava Martinez',
      email: 'ava.martinez@example.com',
      phone: '+1-555-1213',
      address: '77 Birch Blvd, Miami, FL',
      loyalty: 'VIP',
      state: true,
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      fullName: 'William Garcia',
      email: 'william.garcia@example.com',
      phone: '+1-555-1415',
      address: '305 Elm St, Portland, OR',
      loyalty: 'Gold',
      state: true,
      image: 'https://i.pravatar.cc/150?img=6',
    },
    {
      fullName: 'Sophia Rodriguez',
      email: 'sophia.rodriguez@example.com',
      phone: '+1-555-1617',
      address: '12 Willow Way, Boston, MA',
      loyalty: 'Silver',
      state: true,
      image: 'https://i.pravatar.cc/150?img=7',
    },
    {
      fullName: 'James Wilson',
      email: 'james.wilson@example.com',
      phone: '+1-555-1819',
      address: '88 Spruce Ct, San Francisco, CA',
      loyalty: 'Platinum',
      state: true,
      image: 'https://i.pravatar.cc/150?img=8',
    },
    {
      fullName: 'Isabella Lee',
      email: 'isabella.lee@example.com',
      phone: '+1-555-2021',
      address: '6 Cherry Cir, Chicago, IL',
      loyalty: 'Gold',
      state: true,
      image: 'https://i.pravatar.cc/150?img=9',
    },
    {
      fullName: 'Benjamin Harris',
      email: 'benjamin.harris@example.com',
      phone: '+1-555-2223',
      address: '420 Aspen Dr, Atlanta, GA',
      loyalty: 'VIP',
      state: true,
      image: 'https://i.pravatar.cc/150?img=10',
    },
  ];

  customers = computed(() =>
    this.customersData.filter((e) =>
      e.fullName
        .toLowerCase()
        .includes(this.searchForm.text().value().trim().toLowerCase())
    )
  );

  handleUserDeleted(fullName: string) {
    const index = this.customersData.findIndex(
      (e) => e.fullName === fullName
    );
    if (index !== -1) {
      this.customersData.splice(index, 1);
    }
  }

  handleUserEdited(fullName: string) {
    console.log(fullName);
  }

  searchCustomer() {
    // Implement search logic
  }
}
