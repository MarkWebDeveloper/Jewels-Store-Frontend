import { defineStore } from "pinia";
import ProductService from "@/core/products/ProductService";
import type { IProduct } from "@/core/products/IProduct";
import type { IProductDTO } from "@/core/products/IProductDTO";

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      products: [] as IProduct[],
      isLoaded: false as boolean
    }
  },

  actions: {
    async getAllProducts(this: any): Promise<IProduct[]> {
      const service = new ProductService();
      if (this.isLoaded == true) {
        this.isLoaded = false
      }
      this.products = await service.get();
      this.isLoaded = true;
      console.log(this.products);
      return this.products;
    },

    async saveProduct(product: IProductDTO): Promise<void> {
      const service = new ProductService();
      await service.post(product);
    },

    async deleteProduct(id: number): Promise<void> {
      const service = new ProductService();
      await service.delete(id);
    },
    
    deleteProductFromArray(id: number): void {
      this.products.splice(id, 1)
    }
  },
})