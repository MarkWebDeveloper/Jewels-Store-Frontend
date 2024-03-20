<script setup lang="ts">
let x = 0
</script>

<template>
    <div class="product-container">
        <img class="product-image" src="/images/earrings/scheherazade-blue-earrings.png" alt="">
        <p class="product-name">Red Earrings</p>
        <p class="product-description">Beautiful earrings for a night queen</p>
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