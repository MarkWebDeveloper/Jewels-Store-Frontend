import ProductService from "@/core/products/ProductService";
import { defineStore } from "pinia";

export const usePaginationStore = defineStore("pagination", {
    state: () => {
        return {
            isLoaded: false as boolean,
            pagesCount: 1 as number,
            productsCount: 0 as number,
            productsPerPage: 4 as number,
            productService: new ProductService,
          };
    },
  
    actions: {
      async countProductsAndPages(): Promise<void> {
        await this.countProducts()
        this.countPages(this.productsCount, this.productsPerPage)
      },
      async countProducts(): Promise<void> {
        this.productsCount = await this.productService.count()
      },
      countPages(productsCount: number, productsPerPage: number): void {
        this.pagesCount = Math.round(productsCount / productsPerPage)
      }
    },
  });