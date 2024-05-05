import { defineStore } from "pinia";

export const useImagesStore = defineStore("images", {
  state: () => {
    return {
      image: null as File | null,
      images: [] as File[],
      mainImageUrl: "/images/placeholder-image.svg" as string,
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
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.mainImageUrl = e.target?.result as string;
      };
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
      this.images = []
      this.mainImageUrl = "/images/placeholder-image.svg"
    }
  },
});
