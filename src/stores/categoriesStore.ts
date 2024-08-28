import { defineStore } from "pinia";
import CategoryService from "@/core/categories/CategoryService";
import type { ICategory } from "@/core/categories/ICategory";

export const useCategoriesStore = defineStore("categories", {
  state: () => {
    return {
      categories: [] as ICategory[],
      categoryService: new CategoryService,
      isLoaded: false as boolean,
    };
  },

  actions: {
    async getAllCategories(this: any): Promise<ICategory[]> {
      if (this.isLoaded == true) {
        this.isLoaded = false;
      }
      this.categories = await this.categoryService.getAll();
      this.isLoaded = true;
      return this.categories;
    },
  },
});
