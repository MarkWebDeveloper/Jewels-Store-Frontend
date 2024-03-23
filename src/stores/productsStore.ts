import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import ProductService from '@/core/products/ProductService'
import type { IProduct } from '@/core/products/IProduct'
import type { IProductDTO } from '@/core/products/IProductDTO'

export const useProductsStore = defineStore('products', () => {
  
    const service = new ProductService
    let products: IProduct[] = reactive([])
    const isLoaded = ref<Boolean>(false)

    async function getAllProducts(this: any): Promise<IProduct[]> {
        this.products = await service.get()
        isLoaded.value = true
        console.log(this.products)
        return products
    }

    async function saveProduct(product: IProductDTO): Promise<void> {
      await service.post(product)
  }

  return { products, isLoaded, getAllProducts, saveProduct }
})
