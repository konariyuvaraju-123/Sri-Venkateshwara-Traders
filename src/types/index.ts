export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
  }
  
  export interface Review {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }