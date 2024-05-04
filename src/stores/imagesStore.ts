import { defineStore } from "pinia";

export const useImagesStore = defineStore("images", {
    state: () => {
        return {
            images: [] as File[],
          };
    },
  
    actions: {
      
    },
  });