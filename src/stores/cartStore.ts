import type { IProduct } from "@/core/products/IProduct";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => {
        return {
            products: [] as IProduct[],
            productsCount: 0 as number
          };
    },
  
    actions: {
      
    },
  });