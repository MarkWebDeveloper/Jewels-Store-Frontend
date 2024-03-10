<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const isMobile = ref('')
let mql:any

function handleMqlChange(e:any) {
  isMobile.value = e.matches
}

onMounted(() => {
  mql = window.matchMedia('(max-width: 960px)')
  isMobile.value = mql.matches
  mql.addEventListener('change', handleMqlChange)
})

onUnmounted(() => {
  mql.removeEventListener('change', handleMqlChange)
})

let productArray:Object = [
    {
        id: 1,
        product_image: "/images/pictures/rings-and-earrings.png",
        product_name: "Ruby Ring",
        price: 11.99,
    },
    {
        id: 2,
        product_image: "/images/pictures/rings-and-earrings.png",
        product_name: "Lalala",
        price: 12.99,
    },
    {
        id: 3,
        product_image: "/images/pictures/rings-and-earrings.png",
        product_name: "Trululu",
        price: 13.99,
    },
    {
        id: 4,
        product_image: "/images/pictures/rings-and-earrings.png",
        product_name: "Ulala",
        price: 14.99,
    }
]
</script>

<template>
    <div class="item-container" v-for="product in productArray" :key="product.id">
        <div class="images-container">
            <img class="frame" src="/images/pictures/gold-frame-circle.png" alt="">
            <img class="product-image" src="/images/pictures/rings-and-earrings.png" alt="">
        </div>
        <p class="item-title">{{ product.product_name }}</p>
        <p class="item-price">{{ product.price }}$ (14.99$)</p>
    </div>

    <!-- <div class="item-container">
        <div class="images-container">
            <img class="frame" src="/images/pictures/gold-frame-circle.png" alt="">
            <img class="product-image" src="/images/pictures/rings-and-earrings.png" alt="">
        </div>
        <p class="item-title">Ruby Ring</p>
        <p class="item-price">11.99$ (14.99$)</p>
    </div> -->
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
    padding-top: 7%;
    top: 0;
    left: 10%;
    width: 80%;
}

.product-image {
    position: absolute;
    top: 30%;
    left: 25%;
    width: 50%;
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