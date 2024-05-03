import { defineStore } from "pinia";
import ProductService from "@/core/products/ProductService";
import type { IProduct } from "@/core/products/IProduct";
import type { IProductDTO } from "@/core/products/IProductDTO";
import type { IImage } from "@/core/images/IImage";
import { ref } from "vue";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [] as IProduct[],
      newProductId: 0 as number,
      isLoaded: false as boolean,
      showProductSaveSuccessAlert: false as boolean,
      showProductSaveFailedAlert: false as boolean,
      showProductDeleteSuccessAlert: false as boolean,
      showProductDeleteFailedAlert: false as boolean,
      showProductUpdateSuccessAlert: false as boolean,
      showProductUpdateFailedAlert: false as boolean,
      imageURL: import.meta.env.VITE_APP_API_IMGS as string,
      showImageEditForm: false as boolean,
      showImageUploadForm: false as boolean,
      showCreateProductForm: false as boolean,
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
        this.newProductId = response.id
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
      try {
        const response = await service.put(product, id);
        this.replaceProductInArray(this.products.findIndex((element) => element.id == response.id), response)
        this.showProductUpdateSuccessAlert = true;
        setTimeout(() => {
          this.showProductUpdateSuccessAlert = false;
        }, 5000);
        this.openCloseEditPhotosForm()
      } catch (error) {
        this.showProductUpdateFailedAlert = true;
        setTimeout(() => {
          this.showProductUpdateFailedAlert = false;
        }, 5000);
      }
    },

    async deleteProduct(id: number): Promise<void> {
      const service = new ProductService();
      try {
        await service.delete(id);
        this.deleteProductFromArray(this.products.findIndex((element) => element.id == id));
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
    this.showImageEditForm = !this.showImageEditForm
},

  openCloseAddPhotosForm(): void {
  this.showImageUploadForm = !this.showImageUploadForm
  }
  },
});
