import { defineStore } from "pinia";
import CategoryService from "@/core/categories/CategoryService";
import type { ICategory } from "@/core/categories/ICategory";

export const useCategoriesStore = defineStore("categories", {
  state: () => {
    return {
      categories: [] as ICategory[],
      isLoaded: false as boolean,
    };
  },

  actions: {
    async getAllCategories(this: any): Promise<ICategory[]> {
      const service = new CategoryService();
      if (this.isLoaded == true) {
        this.isLoaded = false;
      }
      this.categories = await service.get();
      this.isLoaded = true;
      console.log(this.categories);
      return this.categories;
    },
  },
});
