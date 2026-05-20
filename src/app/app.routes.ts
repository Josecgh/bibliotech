import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './features/dashboard/dashboard';
import { CustomerList } from './features/customer/customer-list/customer-list';
import { CustomerSForm } from './features/customer/customer-forms/customer-s-form/customer-s-form';
import { CustomerRForm } from './features/customer/customer-forms/customer-r-form/customer-r-form';
import { Inventory } from './features/inventory/inventory';
import { Orders } from './features/orders/orders';
import { Reports } from './features/reports/reports';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Dashboard
      },

      {
        path: 'dashboard',
        redirectTo: '/'
      },
      {
        path:'inventory',
        component: Inventory,
      },
      {
        path: 'customers',
        component: CustomerList,
      },
      {
        path: 'newCustomer',
        component: CustomerRForm,
      },
      {
        path: 'customers/:customerId',
        component: CustomerSForm,
      },
      {
        path: 'orders',
        component: Orders,
      },
      {
        path: 'reports',
        component: Reports,
      },
      {
        path:'**',
        component: Dashboard
      }

    ]
  },

];
