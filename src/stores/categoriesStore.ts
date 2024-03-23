import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import CategoryService from '@/core/categories/CategoryService'
import type { ICategory } from '@/core/categories/ICategory'

export const useCategoriesStore = defineStore('categories', () => {
  
    const service = new CategoryService
    let categories: ICategory[] = reactive([])
    const isLoaded = ref<Boolean>(false)

    async function getAllCategories(this: any): Promise<ICategory[]> {
        this.categories = await service.get()
        isLoaded.value = true
        console.log(this.categories)
        return categories
    }

  return { categories, isLoaded, getAllCategories }
})
