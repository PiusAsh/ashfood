export interface Order {
  id: number;
  userId: number;
  orderItems: CartItem[];
  totalPrice: number;
  paymentStatus: string;
  orderStatus: string;
  orderDate: string;
  deliveryPersonId: number | null;
  deliveryStatus: string;
  deliveryAddress: string;
  reference: string;
}

export interface CartItem {
  id: number;
  menuItemId: number;
  quantity: number;
  price: number;
  SubTotal: number;
  // Additional properties as per your requirements
}

export interface Review {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  comments: string;
  // Additional properties as per your requirements
}


export enum UserRole {
  User = 'User',
  DeliveryGuy = 'Delivery',
  Supervisor = 'Supervisor',
  Admin = 'Admin'
}
