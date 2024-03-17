<script setup lang="ts">

</script>

<template>
    <div class="category-container">
        <div class="category-frame">
            <img class="category-image" src="/images/earrings/scheherazade-blue-earrings.png" alt="Earrings Category">
        </div>
        <p class="category-name">EARRINGS</p>
    </div>
</template>

<style lang="scss" scoped>
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
    width: 8rem;
    margin: 3rem auto 3rem auto;
}

.category-name {
    font-size: 1.3rem;
    font-family: "Aleo", serif;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    margin: 1rem auto 1rem auto;
}
</style>