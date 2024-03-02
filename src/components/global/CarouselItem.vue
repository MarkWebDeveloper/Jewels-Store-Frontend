<script setup lang="ts">

</script>

<template>
    <div class="item-container">
        <div class="images-container">
            <img class="frame" src="/images/pictures/gold-frame-circle.png" alt="">
            <img class="product-image" src="../../../public/images/pictures/rings-and-earrings.png" alt="">
        </div>
        <p class="item-title">Ruby Ring</p>
        <p class="item-price">11.99$ (14.99$)</p>
    </div>

    <div class="item-container">
        <div class="images-container">
            <img class="frame" src="/images/pictures/gold-frame-circle.png" alt="">
            <img class="product-image" src="../../../public/images/pictures/rings-and-earrings.png" alt="">
        </div>
        <p class="item-title">Ruby Ring</p>
        <p class="item-price">11.99$ (14.99$)</p>
    </div>
</template>

<style lang="scss" scoped>
.item-container {
    position: relative;
    top: 0;
    left: 0;
    width: clamp(150px, 30vw, 350px);
}

.images-container {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 1.3em;
}

.frame {
    position: relative;
    top: 0;
    left: 0;
}

.product-image {
    position: absolute;
    top: 22.5%;
    left: 15%;
    width: 70%;
}

.item-price, .item-title {
    color: white;
    font-family: "Aleo", serif;
    text-align: center;
}

.item-title {
    font-size: 1.5rem;
}

.item-price {
    font-size: 1.2rem;
}
</style>