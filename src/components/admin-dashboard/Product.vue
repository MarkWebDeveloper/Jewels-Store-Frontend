<script setup lang="ts">
import type { IProduct } from '@/core/products/IProduct'
let x = 0

const props = defineProps<{
    product: IProduct
}>()
</script>

<template>
    <div class="product-container">
        <img class="product-image" src="/images/earrings/scheherazade-blue-earrings.png" alt="">
        <p class="product-name">{{props.product.productName}}</p>
        <p class="product-description">{{props.product.productDescription}}</p>
        <div class="buttons-container">
            <v-btn class="edit-button mr-2" title="Favorites" icon="mdi-pencil" variant="flat"
                density="comfortable"></v-btn>
            <v-btn class="delete-button mr-2" title="Favorites" icon="mdi-delete" variant="flat"
                density="comfortable"></v-btn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product-container {
    display: flex;
    align-items: center;
    margin: 0 auto 1rem auto;
    padding: 1rem;
    border: 0.1rem solid black;
    border-radius: 1.5rem;
    width: 90%;
    background-color: white;
}

.product-image {
    width: 2rem;
    margin-left: 1rem;
}

.product-name {
    font-family: "Aleo", serif;
    font-size: 1rem;
    margin-left: 2rem;
    margin-right: 3rem;
}

.product-description {
    font-family: "Aleo", serif;
    font-size: 1rem;
    margin-left: 2rem;
    margin-right: 3rem;
    font-style: italic;
}

.buttons-container {
    margin-left: auto
}
</style>