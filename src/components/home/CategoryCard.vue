<script setup lang="ts">
import type { ICategory } from '@/core/categories/ICategory';

const props = defineProps<{
    category: ICategory
}>()

const imageURL = import.meta.env.VITE_APP_API_CATEGORIES

const imageDirectory = 'http://localhost:8080/api/v1/images/' + props.category.categoryImage.imageName
</script>

<template>
    <div class="category-container">
        <div class="category-frame">
            <v-img class="category-image" aspect-ratio="1/1" :src="imageDirectory"><template
                    v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular color="yellow-accent-3" indeterminate></v-progress-circular>
                    </div>
                </template></v-img>
        </div>
        <p class="category-name">{{ props.category.categoryName }}</p>
    </div>
</template>

<style lang="scss" scoped>
.category-container {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
}

.category-frame {
    display: flex;
    justify-content: center;
    background: url(/images/pictures/frame-5318153_1920.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 16rem;
}

.category-image {
    max-height: 12rem;
    margin: 3rem auto 3rem auto;
}

.category-name {
    font-size: 2rem;
    font-family: "Alex Brush", cursive;
    // font-style: italic;
    font-weight: bold;
    text-align: center;
    margin: 1rem auto 1rem auto;
}
</style>