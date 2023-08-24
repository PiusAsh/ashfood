import { dummyUsers } from './../../assets/dummyData';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/Users';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient) { }

  private users: any  = dummyUsers;


  products: any[] = [
    {
      id: 1,
      name: 'Egusi Soup',
      category: 'Soup',
      description: 'A delicious Nigerian soup made with ground melon seeds and various spices.',
      price: 800,
      imageUrl: '/assets/images/38-1-450x450 (1).png'
    },
    {
      id: 2,
      name: 'Pounded Yam',
      category: 'Soup',
      description: 'A popular Nigerian staple food made by pounding boiled yam.',
      price: 500,
      imageUrl: '/assets/images/26-1-450x450.png'
    },
    {
      id: 3,
      name: 'Chin Chin',
      category: 'Snack',
      description: 'A crunchy Nigerian snack made with flour, sugar, and other ingredients.',
      price: 300,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 4,
      name: 'Samosa',
      category: 'Snack',
      description: 'A savory pastry filled with spiced meat or vegetables.',
      price: 200,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 5,
      name: 'Jollof Rice',
      category: 'Rice',
      description: 'A popular West African rice dish cooked with tomatoes, spices, and other ingredients.',
      price: 1000,
      imageUrl: '/assets/images/rice.png'
    },
    {
      id: 6,
      name: 'Fried Rice',
      category: 'Rice',
      description: 'A flavorful rice dish made with mixed vegetables, meat, and seasonings.',
      price: 1200,
      imageUrl: '/assets/images/rice.png'
    },
    {
      id: 7,
      name: 'Pepperoni Pizza',
      category: 'Pizza',
      description: 'A classic pizza topped with pepperoni slices and melted cheese.',
      price: 1500,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 8,
      name: 'Margherita Pizza',
      category: 'Pizza',
      description: 'A traditional pizza topped with fresh tomatoes, mozzarella cheese, and basil.',
      price: 1400,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 9,
      name: 'Bitterleaf Soup',
      category: 'Soup',
      description: 'A Nigerian soup made with bitterleaf and assorted meats.',
      price: 900,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 10,
      name: 'Okro Soup',
      category: 'Soup',
      description: 'A hearty Nigerian soup made with okra and other ingredients.',
      price: 750,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 11,
      name: 'Chips',
      category: 'Snack',
      description: 'Crispy potato chips perfect for snacking.',
      price: 250,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 12,
      name: 'Suya',
      category: 'Snack',
      description: 'Spicy grilled skewered meat popular in Nigeria.',
      price: 400,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 13,
      name: 'Coconut Rice',
      category: 'Rice',
      description: 'Fragrant rice cooked with coconut milk and spices.',
      price: 1100,
      imageUrl: '/assets/images/chicken.png'
    },
    {
      id: 14,
      name: 'Jollof Spaghetti',
      category: 'Rice',
      description: 'Spaghetti cooked in a flavorful tomato-based sauce.',
      price: 900,
      imageUrl: '/src/assets/images/spag.png'
    },
    {
      id: 15,
      name: 'Vegetable Pizza',
      category: 'Pizza',
      description: 'Pizza topped with a variety of fresh vegetables.',
      price: 1300,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 16,
      name: 'BBQ Chicken Pizza',
      category: 'Pizza',
      description: 'Pizza topped with barbecued chicken, onions, and cheese.',
      price: 1600,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 17,
      name: 'Edikaikong Soup',
      category: 'Soup',
      description: 'A nutritious Nigerian soup made with vegetables and assorted meats.',
      price: 950,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 18,
      name: 'Ofe Nsala',
      category: 'Soup',
      description: 'A traditional Igbo soup made with fresh fish and spices.',
      price: 850,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 19,
      name: 'Chin-Chin Cookies',
      category: 'Snack',
      description: 'Buttery cookies with a hint of vanilla, a delightful Nigerian snack.',
      price: 350,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 20,
      name: 'Puff Puff',
      category: 'Snack',
      description: 'Deep-fried dough balls dusted with powdered sugar.',
      price: 150,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 21,
      name: 'Coconut Jollof Rice',
      category: 'Rice',
      description: 'A variation of jollof rice cooked with coconut milk.',
      price: 1250,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 22,
      name: 'Native Jollof Rice',
      category: 'Rice',
      description: 'A local version of jollof rice made with indigenous spices.',
      price: 1150,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 23,
      name: 'Meat Feast Pizza',
      category: 'Pizza',
      description: 'Pizza loaded with a variety of meats and cheese.',
      price: 1700,
      imageUrl: '/assets/images/pizza (3).png'
    },
    {
      id: 24,
      name: 'Hawaiian Pizza',
      category: 'Pizza',
      description: 'Pizza topped with ham, pineapple, and cheese.',
      price: 1450,
      imageUrl: 'https://example.com/hawaiian-pizza.jpg'
    },
    {
      id: 25,
      name: 'Ogbono Soup',
      category: 'Soup',
      description: 'A rich Nigerian soup thickened with ground ogbono seeds.',
      price: 850,
      imageUrl: 'https://example.com/ogbono-soup.jpg'
    },
    {
      id: 26,
      name: 'Ewedu Soup',
      category: 'Soup',
      description: 'A popular Yoruba soup made with jute leaves and served with a variety of meats.',
      price: 800,
      imageUrl: 'https://example.com/ewedu-soup.jpg'
    },
    {
      id: 27,
      name: 'Plantain Chips',
      category: 'Snack',
      description: 'Crispy chips made from ripe plantains.',
      price: 300,
      imageUrl: 'https://example.com/plantain-chips.jpg'
    },
    {
      id: 28,
      name: 'Akara',
      category: 'Snack',
      description: 'Deep-fried bean cakes, a popular Nigerian street food.',
      price: 200,
      imageUrl: 'https://example.com/akara.jpg'
    },
    {
      id: 29,
      name: 'Banga Soup',
      category: 'Soup',
      description: 'A traditional Nigerian soup made with palm fruit extract.',
      price: 950,
      imageUrl: 'https://example.com/banga-soup.jpg'
    },
    {
      id: 30,
      name: 'Efo Riro',
      category: 'Soup',
      description: 'A Nigerian vegetable soup made with spinach and assorted meats.',
      price: 900,
      imageUrl: 'https://example.com/efo-riro.jpg'
    },
    {
      id: 31,
      name: 'Sausage Roll',
      category: 'Snack',
      description: 'Puff pastry filled with sausage meat, a popular snack in Nigeria.',
      price: 250,
      imageUrl: 'https://example.com/sausage-roll.jpg'
    },
    {
      id: 32,
      name: 'Egg Roll',
      category: 'Snack',
      description: 'Deep-fried pastry filled with egg, a delicious grab-and-go snack.',
      price: 200,
      imageUrl: 'https://example.com/egg-roll.jpg'
    },
    {
      id: 33,
      name: 'Coconut Egusi Soup',
      category: 'Soup',
      description: 'A variation of egusi soup made with coconut milk and ground melon seeds.',
      price: 900,
      imageUrl: 'https://example.com/coconut-egusi-soup.jpg'
    },
    {
      id: 34,
      name: 'Oha Soup',
      category: 'Soup',
      description: 'A traditional Igbo soup made with oha leaves and assorted meats.',
      price: 850,
      imageUrl: 'https://example.com/oha-soup.jpg'
    },
    {
      id: 35,
      name: 'Suya Pizza',
      category: 'Pizza',
      description: 'A unique fusion of Nigerian suya spice on a pizza.',
      price: 1600,
      imageUrl: 'https://example.com/suya-pizza.jpg'
    },
    {
      id: 36,
      name: 'Seafood Pizza',
      category: 'Pizza',
      description: 'Pizza topped with a medley of delicious seafood.',
      price: 1550,
      imageUrl: 'https://example.com/seafood-pizza.jpg'
    },
    {
      id: 37,
      name: 'Ofe Onugbu',
      category: 'Soup',
      description: 'A Nigerian soup made with bitterleaf and assorted meats.',
      price: 950,
      imageUrl: 'https://example.com/ofe-onugbu.jpg'
    },
    {
      id: 38,
      name: 'Nkwobi',
      category: 'Soup',
      description: 'A spicy Nigerian delicacy made with cow foot.',
      price: 850,
      imageUrl: 'https://example.com/nkwobi.jpg'
    },
    {
      id: 39,
      name: 'Chin-Chin Biscuits',
      category: 'Snack',
      description: 'Delicious bite-sized biscuits with a hint of cinnamon.',
      price: 350,
      imageUrl: 'https://example.com/chin-chin-biscuits.jpg'
    },
    {
      id: 40,
      name: 'Spring Rolls',
      category: 'Snack',
      description: 'Crispy fried rolls filled with vegetables and meat.',
      price: 200,
      imageUrl: 'https://example.com/spring-rolls.jpg'
    }
  ];





  getAllProducts(): any[] {
    // Return a copy of the dummyMenus array to prevent modification of the original array
    return [...this.products];
  }

  getAllFoodsBySearch(searchTerm: string){
return this.getAllProducts().filter(x => x.category.toLowerCase().includes(searchTerm.toLowerCase()))
  }


  login(emailOrPhone: string, password: string): string {
    const user = this.users.find(
      (u: { emailAddress: string; phoneNumber: string; password: string; }) =>
        (u.emailAddress === emailOrPhone || u.phoneNumber === emailOrPhone) &&
        u.password === password
    );

    if (user) {
      // Store user details in local storage
      localStorage.setItem('currentUser', JSON.stringify(user));
      return 'success';
    } else {
      return 'error';
    }
  }






loginUser(emailOrPhone: string, password: string) {
  // Check network connectivity
  if (!navigator.onLine) {
    return Promise.reject('Please check your internet connection.');
  }

  // Make an API call to validate the login credentials
  const loginData = { emailOrPhone, password };
  return this.http.post<any>(this.users, loginData)
    .toPromise()
    .then((response) => {
      // Handle successful login response
      const user = response.user;
      if (user) {
        // Store user details in local storage
        localStorage.setItem('currentUser', JSON.stringify(user));
        return 'success';
      } else {
        return 'Invalid email/phone or password. Please try again.';
      }
    })
    .catch((error) => {
      // Handle API error
      return 'An error occurred. Please try again.';
    });
}

}


