<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categoriesStore';
import CategoryCard from './CategoryCard.vue';

const categoriesStore = useCategoriesStore()
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
    margin: 1rem;
    font-size: 2rem;
}

@media only screen and (min-width: 600px) {
    .categories-title {
        margin: 1.2rem;
        font-size: 2.2em;
    }
}

@media only screen and (min-width: 960px) {
    .categories-title {
        margin: 1.2rem;
        font-size: 2.5em;
    }
}

@media only screen and (min-width: 1264px) {
    .categories-title {
        margin: 1.5rem;
        font-size: 3em;
    }
}
</style>