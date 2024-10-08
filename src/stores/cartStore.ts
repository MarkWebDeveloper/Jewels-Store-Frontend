import type { IProduct } from "@/core/products/IProduct";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
        isLoaded: false as boolean,
        products: [] as IProduct[],
        productsCount: 0 as number,
    };
  },

  actions: {
    addToCart(product: IProduct): void {
      this.products.push(product);
      localStorage.setItem("cart", JSON.stringify(this.products));
      this.productsCount += 1;
      localStorage.setItem("cartCount", JSON.stringify(this.productsCount));
      console.log(this.products);
    },

    createEventForCartSyncOnClose(): void {
      window.addEventListener("beforeunload", () => {
        localStorage.setItem("cart", JSON.stringify(this.products));
        localStorage.setItem("cartCount", JSON.stringify(this.productsCount));
      });
    },

    synchronizeWithStoredCart(): void {
      const storedCart: string | null = localStorage.getItem("cart");
      if (storedCart) {
        this.products = JSON.parse(localStorage.getItem("cart")!);
        this.productsCount = JSON.parse(localStorage.getItem("cartCount")!);
      }
      this.isLoaded = true;
    },
  },
});
