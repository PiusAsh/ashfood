import { User, UserRole } from "src/app/Models/Users";



export const dummyUsers: User[] = [
  {
    
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    emailAddress: 'john@example.com',
    phoneNumber: '12345',
    address: '123 Main Street',
    state: 'California',
    country: 'United States',
    password: 'ash',
    dateOfBirth: '1990-01-01',
    gender: 'Male',
    role: UserRole.User
  },

  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    emailAddress: 'janesmith@example.com',
    phoneNumber: '123456',
    address: '456 Elm Street',
    state: 'New York',
    country: 'United States',
    password: 'ash',
    dateOfBirth: '1995-05-10',
    gender: 'Female',
    role: UserRole.Admin
  },
  {
    id: 3,
    firstName: 'Admin',
    lastName: 'User',
    emailAddress: 'admin@example.com',
    phoneNumber: '1234567',
    address: '789 Oak Street',
    state: 'Texas',
    country: 'United States',
    password: 'ash',
    dateOfBirth: '1985-12-15',
    gender: 'Male',
    role: UserRole.Supervisor
  }
  // Add more dummy users here...
];


