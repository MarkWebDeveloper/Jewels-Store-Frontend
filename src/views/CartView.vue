<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import ProductCard from '@/components/cart/ProductCard.vue';

const cartStore = useCartStore()

</script>

<template>
    <div>
        <h2 id="products-count-title">You have {{ cartStore.productsCount }} products in the cart</h2>
        <div id="products-container">
            <ProductCard v-for="product in cartStore.products" :key="product.id" :product="product" v-if="cartStore.isLoaded"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#products-count-title {
    font-family: "Alex Brush", cursive;
    font-size: 1.6rem;
    margin: 1rem auto 1rem auto;
    text-align: center;
}
</style>