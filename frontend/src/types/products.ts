export type Product = {
    _id: string;
    title: string;
    price: number;
    image: string;
    categories: string;
    description: string;
    quantity?: number; // Make quantity optional for product details
  };