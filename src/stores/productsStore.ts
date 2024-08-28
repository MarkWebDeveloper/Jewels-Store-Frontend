import { defineStore } from "pinia";
import ProductService from "@/core/products/ProductService";
import type { IProduct } from "@/core/products/IProduct";
import type { IProductDTO } from "@/core/products/IProductDTO";
import type { IImage } from "@/core/images/IImage";
import { useAlertsStore } from "./alertsStore";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [] as IProduct[],
      filteredByCategory: [] as IProduct[],
      productService: new ProductService,
      newProductId: 0 as number,
      editingProductId: 0 as number,
      isLoaded: false as boolean,
      imageURL: import.meta.env.VITE_APP_API_IMGS as string,
      showImageUploadForm: false as boolean,
      showImageUpdateForm: false as boolean,
      showCreateProductForm: false as boolean,
      alertsStore: useAlertsStore()
    };
  },

  actions: {
    async getAllProducts(this: any): Promise<IProduct[]> {
      if (this.isLoaded == true) {
        this.isLoaded = false;
      }
      this.products = await this.productService.getAll();
      this.isLoaded = true;
      return this.products;
    },

    async getProductsByCategory(categoryName: string): Promise<IProduct[]> {
      try {
        this.filteredByCategory = await this.productService.getAllByCategory(categoryName)
        return this.filteredByCategory
      } catch (error) {
        console.error('Error fetching products by category:', error)
      }
      return this.filteredByCategory
    },

    async saveProduct(product: IProductDTO): Promise<void> {
      try {
        const response = await this.productService.post(product);
        this.newProductId = response.id
        this.addProductToArray(response)
        this.alertsStore.createAlert("success", "New product is saved successfully")
      } catch (error) {
        this.alertsStore.createAlert("error", "Unexpected error occurred during the save process of the new product")
      }
    },
    
    async updateProduct(product: IProductDTO, id: number): Promise<void> {
      try {
        const response = await this.productService.put(product, id);
        this.replaceProductInArray(this.products.findIndex((element) => element.id == response.id), response)
        this.alertsStore.createAlert("success", "The product is updated successfully")
      } catch (error) {
        this.alertsStore.createAlert("error", "Unexpected error occurred during the product update")
      }
    },

    async deleteProduct(id: number): Promise<void> {
      try {
        await this.productService.delete(id);
        this.deleteProductFromArray(this.products.findIndex((element) => element.id == id));
        this.alertsStore.createAlert("success", "The product is deleted successfully")
      } catch (error) {
        this.alertsStore.createAlert("error", "Unexpected error occurred during the product delete")
      }
    },

    deleteProductFromArray(id: number): void {
      this.products.splice(id, 1);
    },

    addProductToArray(product: IProduct): void  {
      this.products.push(product)
    },

    replaceProductInArray(id: number, product: IProduct): void {
      this.products.splice(id, 1, product);
    },

    findMainImage(product: IProduct): string | undefined {
      let imageDirectory: string = ""

      if (product.images != null) {
        const mainImage: IImage = product.images.find(image => image.mainImage == true)!
        const mainImageName: string = mainImage?.imageName
        imageDirectory = this.imageURL + `/${mainImageName}`
      }

      if (product.images == null || product.images.length == 0) {
        imageDirectory = "/images/placeholder-image.svg"
      }
      
      return imageDirectory
    },

    convertToDecimal(number: number): string {
      if (typeof number !== 'number' || number % 1 !== 0) {
          return 'Invalid input. Please provide an integer.';
      }
  
      let numberStr = number.toString();
      
      let lastTwoDigits = numberStr.slice(-2);
      
      let decimalNumber = ""
      
      if (numberStr.length == 1) {
        decimalNumber = `0,0${numberStr}`
      }

      if (numberStr.length == 2) {
        decimalNumber = `0,${numberStr}`
      }
  
      if (lastTwoDigits == "00") {
        decimalNumber = numberStr.slice(0, -2)
      }
  
      if (lastTwoDigits != "00" && numberStr.length != 1 && numberStr.length != 2) {
        decimalNumber = numberStr.slice(0, -2) + ',' + lastTwoDigits;
      }

      return decimalNumber;
    },

    openCloseCreateProductForm(): void {
      this.showCreateProductForm = !this.showCreateProductForm
    },

    openCloseEditPhotosForm(): void {
      this.showImageUpdateForm = !this.showImageUpdateForm
    },

    openCloseAddPhotosForm(): void {
    this.showImageUploadForm = !this.showImageUploadForm
    },

  }
});
