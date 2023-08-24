export interface User {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  state: string;
  country: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  role: UserRole;
}

export enum UserRole {
  User = 'User',
  DeliveryGuy = 'Delivery',
  Supervisor = 'Supervisor',
  Admin = 'Admin'
}
