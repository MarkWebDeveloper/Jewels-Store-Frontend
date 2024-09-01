<script setup lang="ts">
import HeaderNav from '@/components/header/HeaderNav.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import { useProductsStore } from '@/stores/productsStore';
import { useRouter } from 'vue-router';

const productsStore = useProductsStore()
const router = useRouter()

const categoryName: string = router.currentRoute.value.params.categoryName as string
productsStore.getProductsByCategory(categoryName)
</script>

<template>
    <HeaderNav />
    <div class="buttons-container">
        <button class="button" id="filter-button" type="submit">
            <p class="button-text">Filter</p>
            <img class="button-logo" src="/images/logos/filter-menu-outline.svg" alt="filter-logo">
        </button>
        <button class="button" id="filter-button" type="submit">
            <p class="button-text">Sort By</p>
            <img class="button-logo" src="/images/logos/sort.svg" alt="filter-logo">
        </button>
    </div>
    <div class="products-container">
        <ProductCard v-for="product in productsStore.filteredByCategory" :key="product.id" :product="product" v-if="productsStore.isLoaded"/>
    </div>
</template>

<style lang="scss" scoped>
.buttons-container {
    display: flex;
    justify-content: space-between;
    margin: 2rem 2rem 1rem 2rem;
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: black solid 1px;
    padding: 0.3rem 0.8rem 0.3rem 0.8rem;
    box-shadow: 2px 4px 3px lightgray;
    width: 7rem;
    min-height: 1.5rem;
}
.button-text {
    font-family: "Aleo", serif;
    font-size: 0.8rem;
}
.button-logo {
    width: 1.5rem;
    margin-left: 0.5rem;
}
.products-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    padding-inline-start: 20px;
    padding-inline-end: 20px;
}
</style>