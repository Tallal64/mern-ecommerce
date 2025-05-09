import { Product } from "@/types/products";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type useProductStoreProps = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

export const useProductStore = create<useProductStoreProps>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product: Product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item._id === product._id
          );
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item._id === product._id
                  ? { ...item, quantity: (item.quantity || 0) + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      removeFromCart: (productId: string) =>
        set((state) => ({
          cart: state.cart.filter((item) => item._id !== productId),
        })),

      updateCartItemQuantity: (productId: string, quantity: number) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === productId
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),

    {
      name: "product-cart-storage", // unique name for localStorage
    }
  )
);
