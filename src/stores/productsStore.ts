import { defineStore } from "pinia";
import ProductService from "@/core/products/ProductService";
import type { IProduct } from "@/core/products/IProduct";
import type { IProductDTO } from "@/core/products/IProductDTO";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [] as IProduct[],
      newProduct: {} as IProduct,
      isLoaded: false as boolean,
      showProductSaveSuccessAlert: false as boolean,
      showProductSaveFailedAlert: false as boolean,
      showProductDeleteSuccessAlert: false as boolean,
      showProductDeleteFailedAlert: false as boolean,
    };
  },

  actions: {
    async getAllProducts(this: any): Promise<IProduct[]> {
      const service = new ProductService();
      if (this.isLoaded == true) {
        this.isLoaded = false;
      }
      this.products = await service.get();
      this.isLoaded = true;
      console.log(this.products);
      return this.products;
    },

    async saveProduct(product: IProductDTO): Promise<void> {
      const service = new ProductService();
      try {
        const response = await service.post(product);
        this.addProductToArray(response)
        this.showProductSaveSuccessAlert = true;
        setTimeout(() => {
          this.showProductSaveSuccessAlert = false;
        }, 5000);
      } catch (error) {
        this.showProductSaveFailedAlert = true;
        setTimeout(() => {
          this.showProductSaveFailedAlert = false;
        }, 5000);
      }
    },

    async updateProduct(product: IProductDTO, id: number): Promise<void> {
      const service = new ProductService();
      await service.put(product, id);
    },

    async deleteProduct(id: number): Promise<void> {
      const service = new ProductService();
      try {
        await service.delete(id);
        this.showProductDeleteSuccessAlert = true;
        setTimeout(() => {
          this.showProductDeleteSuccessAlert = false;
        }, 5000);
      } catch (error) {
        this.showProductDeleteFailedAlert = true;
        setTimeout(() => {
          this.showProductDeleteFailedAlert = false;
        }, 5000);
      }
    },

    deleteProductFromArray(id: number): void {
      this.products.splice(id, 1);
    },

    addProductToArray(product: IProduct): void  {
      this.products.push(product)
    }
  },
});
