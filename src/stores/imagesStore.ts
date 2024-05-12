import type { IImage } from "@/core/images/IImage";
import ImageService from "@/core/images/ImageService";
import type { IProduct } from "@/core/products/IProduct";
import { defineStore } from "pinia";

const imageService = new ImageService

export const useImagesStore = defineStore("images", {
  state: () => {
    return {
      image: null as File | null,
      images: [] as File[],
      oldMainImage: {} as IImage | null,
      oldOtherImages: [] as IImage[],
      oldMainImageName: "" as string | undefined,
      oldOtherImageNames: [] as string[] | undefined,
      mainImageUrl: "/images/placeholder-image.svg" as string,
      oldMainImageUrl: "" as string
    };
  },

  actions: {
    handleFileUpload(event: Event): void {
      const target = event.target as HTMLInputElement;
      if (target && target.files) {
        this.image = target.files[0];
        this.previewMainImage(this.image);
      } else {
        alert("File input event is undefined");
      }
    },

    previewMainImage(file: File): void {
      this.mainImageUrl = URL.createObjectURL(file)
    },

    handleFilesUpload(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target && target.files) {
        const filesArray = Array.from(target.files);

        for (let index = 0; index < Array.from(target.files).length; index++) {
          this.images.push(filesArray[index]);
        }
      } else {
        alert("File input event is undefined");
      }
    },

    removeMainImage(): void {
      this.mainImageUrl = "/images/placeholder-image.svg";
      this.image = null;
    },

    resetImagesForm(): void {
      this.image = null
      this.oldMainImage = null
      this.images = []
      this.oldOtherImages = []
      this.oldMainImageUrl = ""
      this.oldOtherImageNames = []
      this.mainImageUrl = "/images/placeholder-image.svg"
    },

    refillPhotos (product: IProduct): void {
      const uri: string = import.meta.env.VITE_APP_API_IMGS
      this.oldMainImageName = product.images.find((image) => image.mainImage == true)?.imageName
      const oldOtherImages: IImage[] = product.images.filter((image) => image.mainImage == false)
      for (let index = 0; index < oldOtherImages.length; index++) {
        this.oldOtherImageNames?.push(oldOtherImages[index].imageName)
      }
      this.oldMainImageUrl = uri + `/${this.oldMainImageName}`
      this.mainImageUrl = this.oldMainImageUrl
    },

    checkForNewMainImage(): boolean {
      if (this.image?.name !== undefined && this.image?.name !== this.oldMainImageName) {
          return true
      } else {
          return false
      }
    },

    findImagesToDelete() {
      let newOtherImageNames: string[] = []
      for (let index = 0; index < this.images.length; index++) {
          newOtherImageNames.push(this.images[index].name)
      }
      let newOtherImagesSet = new Set(newOtherImageNames);
      let difference: string[] = [...new Set(this.oldOtherImageNames?.filter(image => !newOtherImagesSet.has(image)))];
      if (this.checkForNewMainImage() === true) {
          difference.push(this.oldMainImageName!)
      }
      return difference
    },

    findImagesToUpload () {
      let newOtherImageNames: string[] = []
      for (let index = 0; index < this.images.length; index++) {
          newOtherImageNames.push(this.images[index].name)
      }
      let oldOtherImageNamesSet = new Set(this.oldOtherImageNames);
      let difference: string[] = [...new Set(newOtherImageNames?.filter(image => !oldOtherImageNamesSet.has(image)))];
      let uploadArray: File[] = []
      let searchedImage: File
      for (let index = 0; index < difference.length; index++) {
          if (this.images.find(image => image.name === difference[index]) != undefined) {
              searchedImage = this.images.find(image => image.name === difference[index])!
              uploadArray.push(searchedImage)
          }
      }
      return uploadArray
    },

    async deleteOldImages () {
      for (let index = 0; index < this.findImagesToDelete().length; index++) {
          await imageService.deleteOne(this.findImagesToDelete()[index])
      }
  }
  }
});
