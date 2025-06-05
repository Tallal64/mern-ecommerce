export type Product = {
  _id: string;
  title: string;
  price: number;
  image: string;
  categories: string;
  description: string;
  quantity?: number; // Make quantity optional for product details
};

export type userDataProps = {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role?: "customer" | "admin";
};

export type LoginCredentials = {
  username?: string;
  email?: string;
  password: string;
};
