<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categoriesStore';
import CategoryCard from './CategoryCard.vue';

const categoriesStore = useCategoriesStore()
// let categories:Object = [
//     {
//         id: 1,
//         product_image: "/images/pictures/rings-and-earrings.png",
//         category_name: "Earrings",
//     },
//     {
//         id: 2,
//         product_image: "/images/pictures/rings-and-earrings.png",
//         product_name: "Necklace & Earrings Set",
//         price: 12.99,
//     },
//     {
//         id: 3,
//         product_image: "/images/pictures/rings-and-earrings.png",
//         product_name: "Studs",
//     },
//     {
//         id: 4,
//         product_image: "/images/pictures/rings-and-earrings.png",
//         product_name: "Necklaces",
//     },
//     {
//         id: 5,
//         product_image: "/images/pictures/rings-and-earrings.png",
//         product_name: "Rings",
//     },
//     {
//         id: 6,
//         product_image: "/images/pictures/rings-and-earrings.png",
//         product_name: "Ring & Earrings Set",
//     }
// ]
</script>

<template>
    <h2 class="categories-title">Categories</h2>
    <div class="categories-container">
        <CategoryCard v-for="category in categoriesStore.categories" :key="category.id" :category="category"/>
    </div>
</template>

<style lang="scss" scoped>
.categories-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
}

.categories-title {
    font-family: "Alex Brush", cursive;
    text-align: center;
    margin: 1.5rem;
    font-size: 3rem;
}
</style>