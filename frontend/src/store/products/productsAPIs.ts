import { create } from "zustand";

type Product = {
  _id: string;
  title: string;
  price: number;
  image: string;
  categories: string;
  description: string;
};

type useProductProps = {
  Products: Product[] | null;
  isLoading: boolean;
  getAllProducts: () => void;
  getProduct: (_id: string) => Promise<Product>;
};

export const useProduct = create<useProductProps>((set) => ({
  Products: null,
  isLoading: true,

  getAllProducts: async () => {
    const response = await fetch("http://localhost:8080/api/products");
    const responseData = await response.json();
    set({ isLoading: false, Products: responseData.data });
  },

  getProduct: async (_id: string) => {
    const response = await fetch(`http://localhost:8080/api/products/${_id}`);
    const responseData = await response.json();
    return responseData;
  },
}));
