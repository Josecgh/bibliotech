import { Component } from '@angular/core';
import { CustomerList } from '../customer/customer-list/customer-list';

@Component({
  selector: 'app-dashboard',
  imports: [CustomerList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {}
