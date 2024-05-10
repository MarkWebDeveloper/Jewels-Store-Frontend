import type { IImage } from "@/core/images/IImage";
import { defineStore } from "pinia";

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
        console.log(this.image);
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
    }
  },
});
