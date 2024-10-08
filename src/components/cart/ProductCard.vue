<script setup lang="ts">
import type { IProduct } from '@/core/products/IProduct';
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';

const props = defineProps<{
    product: IProduct
}>()

const cartStore = useCartStore()
const productsStore = useProductsStore()

const imageDirectory: string | undefined = productsStore.findMainImage(props.product)
</script>

<template>
    <div id="card-container">
        <img :src="imageDirectory" alt="">
        <p id="product-name">{{ props.product.productName }}</p>
    </div>
</template>

<style lang="scss" scoped>
#card-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
}
img {
    width: 3rem;
}
#product-name {
    font-family: "Aleo", serif;
    font-weight: 300;
}
</style>