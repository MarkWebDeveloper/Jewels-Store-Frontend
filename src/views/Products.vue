<script setup lang="ts">
import HeaderNav from '@/components/header/HeaderNav.vue';
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
            <img class="button-logo" src="./../../public/images/logos/filter-menu-outline.svg" alt="filter-logo">
        </button>
        <button class="button" id="filter-button" type="submit">
            <p class="button-text">Sort By</p>
            <img class="button-logo" src="./../../public/images/logos/sort.svg" alt="filter-logo">
        </button>
    </div>
</template>

<style lang="scss" scoped>
.buttons-container {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem 0 2rem;
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    border-radius: 15px;
    border: black solid 1px;
    padding: 0.3rem 0.8rem 0.3rem 0.8rem;
    box-shadow: 2px 4px 3px lightgray;
    width: 8rem;
    min-height: 2.5rem;
    font-family: "Aleo", serif;
}
.button-logo {
    width: 2rem;
    margin-left: 0.5rem;
}
</style>