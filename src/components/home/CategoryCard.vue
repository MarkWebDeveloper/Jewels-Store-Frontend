<script setup lang="ts">
import type { ICategory } from '@/core/categories/ICategory';

const props = defineProps<{
    category: ICategory
}>()

const imageURL: string = import.meta.env.VITE_APP_API_IMGS

const imageDirectory: string = imageURL + `/${props.category.categoryImage.imageName}`
</script>

<template>
    <router-link :to="{ name: 'Products', params: { categoryName: category.categoryName } }" class="category-container">  
            <div class="category-frame">
                <img class="category-image" aspect-ratio="1/1" :src="imageDirectory">
            </div>
            <p class="category-name">{{ props.category.categoryName }}</p>
    </router-link>
</template>

<style lang="scss" scoped>
.category-container {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    cursor: pointer;
    text-decoration: none;
}

.category-frame {
    display: flex;
    justify-content: center;
    background: url(/images/pictures/frame-5318153_1920.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 8rem;
}

.category-image {
    max-height: 6em;
    margin: 1.5rem auto 1.5rem auto;
}

.category-name {
    font-size: 1rem;
    font-family: "Alex Brush", cursive;
    font-weight: bold;
    text-align: center;
    margin: 0.2rem auto 0.2rem auto;
    color: black;
}

@media only screen and (min-width: 600px) {
    .category-container {
    width: 33%;
    margin-bottom: 3rem;
}
.category-frame {
    width: 100%;
}
.category-image {
    max-height: 8em;
    margin: 1.5rem auto 1.5rem auto;
}
.category-name {
    font-size: 1.5rem;
    margin: 0.4rem auto 0.4rem auto;
}
}

@media only screen and (min-width: 960px) {
    .category-container {
    width: 33%;
    margin-bottom: 3rem;
}
.category-frame {
    width: 100%;
}
.category-image {
    max-height: 12em;
    margin: 1.5rem auto 1.5rem auto;
}
.category-name {
    font-size: 2rem;
    margin: 0.7rem auto 0.7rem auto;
}
}

@media only screen and (min-width: 1264px) {
    .category-container {
    width: 20%;
    margin-bottom: 3rem;
}
.category-frame {
    width: 100%;
}
.category-image {
    max-height: 12em;
    margin: 1.5rem auto 1.5rem auto;
}
.category-name {
    font-size: 2rem;
    margin: 0.7rem auto 0.7rem auto;
}
}
</style>