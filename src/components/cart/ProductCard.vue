<script setup lang="ts">
import type { IProduct } from '@/core/products/IProduct';
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';

const props = defineProps<{
    product: IProduct
}>()

const cartStore = useCartStore()
const productsStore = useProductsStore()

const imageDirectory: string | undefined = productsStore.findMainImage(props.product)
</script>

<template>
    <div id="card-container">
        <div id="image-frame">
            <img :src="imageDirectory" alt="">
        </div>
        <div id="info-container">
            <div id="name-price-container">
                <p id="product-name">{{ props.product.productName }}</p>
                <p id="price">${{ productsStore.convertToDecimal(props.product.price) }}</p>
            </div>
            <div id="quantity-remove-container">
                <div id="quantity-container">
                    <p id="quantity-title">Quantity</p>
                    <select name="quantity-select" id="quantity-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <button id="remove-button">Remove</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#card-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-bottom: 1rem;
}
#image-frame {
    display: flex;
    justify-content: center;
    background: url(/images/pictures/frame-5318153_1920.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    max-width: 8rem;
}
img {
    object-fit: cover;
    width: 3rem;
    max-height: 4rem;
    margin: 1.5rem auto 1.5rem auto;
}
#info-container{
    display: grid;
    grid-template-rows: repeat(2, 1fr);
}
#name-price-container {
    display: flex;
    justify-content: space-between;
}
#product-name {
    font-family: "Aleo", serif;
    font-weight: 300;
}
#price {
    font-family: "Aleo", serif;
    font-weight: 600;
}
#quantity-remove-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
#quantity-title {
    font-family: "Aleo", serif;
    font-size: 0.7rem;
}
#quantity-select {
    width: 5rem;
}
#remove-button {
    font-family: "Aleo", serif;
    font-size: 0.8rem;
}
</style>