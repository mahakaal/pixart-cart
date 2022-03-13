export class Cart {
  cart_id: string;
  ecommerce_id: string;
  customer_id: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export enum CartStatus {
  CREATED = 'created',
  BUILDING = 'building',
  CHECKOUT = 'checkout',
}
