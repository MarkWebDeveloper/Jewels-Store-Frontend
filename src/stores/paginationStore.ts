import ProductService from "@/core/products/ProductService";
import { defineStore } from "pinia";

export const usePaginationStore = defineStore("pagination", {
    state: () => {
        return {
            isLoaded: false as boolean,
            pagesCount: 1 as number,
            currentPage: 1 as number,
            productsCount: 0 as number,
            productsPerPage: 10 as number,
            productService: new ProductService,
            categoryName: "" as string
          };
    },
  
    actions: {
      async countProductsAndPages(): Promise<void> {
        await this.countProductsByCategory()
        this.countPages(this.productsCount, this.productsPerPage)
      },
      async countProductsByCategory(): Promise<void> {
        this.productsCount = await this.productService.countByCategory(this.categoryName)
      },
      countPages(productsCount: number, productsPerPage: number): void {
        this.pagesCount = Math.round(productsCount / productsPerPage)
      }
    },
  });