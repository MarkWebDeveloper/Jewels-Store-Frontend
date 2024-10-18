<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import ProductCard from '@/components/cart/ProductCard.vue';
import TotalSection from '@/components/cart/TotalSection.vue';

const cartStore = useCartStore()

</script>

<template>
    <div>
        <h2 id="products-count-title">You have {{ cartStore.productsCount }} products in the cart</h2>
        <div id="products-container">
            <ProductCard v-for="product in cartStore.products" :key="product.id" :product="product" v-if="cartStore.isLoaded"/>
        </div>
        <TotalSection />
    </div>
</template>

<style lang="scss" scoped>
#products-count-title {
    font-family: "Alex Brush", cursive;
    font-size: 1.6rem;
    margin: 1rem auto 1rem auto;
    text-align: center;
}
#products-container {
    padding: 0rem 2rem 0rem 2rem;
}
</style>