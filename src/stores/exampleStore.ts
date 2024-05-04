import { defineStore } from "pinia";

export const useExampleStore = defineStore("example", {
    state: () => {
        return {
            isLoaded: false as boolean,
          };
    },
  
    actions: {
      
    },
  });