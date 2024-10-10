<script setup lang="ts">
import type { IProduct } from '@/core/products/IProduct';
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';
import QuantityDropdown from './QuantityDropdown.vue';
import { ref, watch } from 'vue';

const props = defineProps<{
    product: IProduct
}>()

const cartStore = useCartStore()
const productsStore = useProductsStore()

const selectOptions: number[] = Array.from({length: 10}, (_, i) => i + 1)
const selectedOption = ref<number>(1);
const initialConvertedPrice = ref<number>(Number(productsStore.convertToDecimal(props.product.price)))
const productPrice = ref<number>(initialConvertedPrice.value)

const calculatePrice = (): void => {
    const newPrice = initialConvertedPrice.value * selectedOption.value
    productPrice.value = Math.round((newPrice + Number.EPSILON) * 100) / 100
}

watch(() => selectedOption.value, (): void => {
    calculatePrice()
})

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
                <p id="price">${{ productPrice }}</p>
            </div>
            <div id="quantity-remove-container">
                <div id="quantity-container">
                    <p id="quantity-title">Quantity:</p>
                    <v-select class="pa-0 ma-0" id="select-dropdown" :items="selectOptions" variant="outlined"
                        density="compact" hide-details="auto" v-model="selectedOption"></v-select>
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
    padding-left: 1rem;
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
#remove-button {
    font-family: "Aleo", serif;
    font-size: 0.8rem;
}
</style>