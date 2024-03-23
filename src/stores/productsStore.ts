import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import ProductService from '@/core/products/ProductService'
import type { IProduct } from '@/core/products/IProduct'

export const useProductsStore = defineStore('products', () => {
  
    const service = new ProductService
    let products: IProduct[] = reactive([])
    const isLoaded = ref<Boolean>(false)

    async function getAllProducts(this: any): Promise<IProduct[]> {
        this.products = await service.get()
        isLoaded.value = true
        console.log(products)
        return products
    }

  return { products, isLoaded, getAllProducts }
})
