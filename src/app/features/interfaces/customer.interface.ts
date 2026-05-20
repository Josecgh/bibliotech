export interface ICustomer {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  loyalty: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'VIP';
  state: boolean;
  image: string;
}
