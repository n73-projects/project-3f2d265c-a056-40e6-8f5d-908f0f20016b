export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Premium wireless headphones with noise cancellation",
    category: "Electronics"
  },
  {
    id: "2",
    name: "Minimalist Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Elegant minimalist watch with leather strap",
    category: "Accessories"
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    description: "Comfortable ergonomic chair for productivity",
    category: "Furniture"
  },
  {
    id: "4",
    name: "Smart Water Bottle",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    description: "Temperature-controlled smart water bottle",
    category: "Lifestyle"
  },
  {
    id: "5",
    name: "Wireless Charging Pad",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    description: "Fast wireless charging pad for all devices",
    category: "Electronics"
  },
  {
    id: "6",
    name: "Premium Coffee Beans",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    description: "Artisan roasted coffee beans from single origin",
    category: "Food & Beverage"
  },
  {
    id: "7",
    name: "Bamboo Desk Organizer",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    description: "Sustainable bamboo desk organizer set",
    category: "Office"
  },
  {
    id: "8",
    name: "Fitness Resistance Bands",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    description: "Professional resistance bands for home workouts",
    category: "Fitness"
  }
];