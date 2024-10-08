<script setup lang="ts">
import type { IProduct } from '@/core/products/IProduct';
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';

const props = defineProps<{
    product: IProduct
}>()

const productsStore = useProductsStore()
const cartStore = useCartStore()

const imageDirectory: string | undefined = productsStore.findMainImage(props.product)
</script>

<template>
    <div id="general-container">
        <router-link :to="{ name: 'product-details', params: { productName: product.productName } }"
            class="product-container">
            <div class="product-frame">
                <img class="product-image" :src="imageDirectory">
            </div>
            <p class="product-name" :title="props.product.productName">{{ props.product.productName }}</p>
            <p class="product-price">${{ productsStore.convertToDecimal(props.product.price) }}</p>
        </router-link>
        <button @click="cartStore.addToCart(props.product)">Add to cart</button>
    </div>
</template>

<style lang="scss" scoped>
#general-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: .5rem;
}

.product-frame {
    display: flex;
    justify-content: center;
    background: url(/images/pictures/gold-frame-circle.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 8rem;
}

.product-image {
    max-height: 6em;
    margin: 1.5rem auto 1.5rem auto;
}

.product-name {
    font-size: 1rem;
    font-family: "Aleo", serif;
    font-weight: bold;
    text-align: center;
    margin: 0.2rem auto 0.2rem auto;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 10rem;
}

.product-price {
    font-size: 1rem;
    font-family: "Aleo", serif;
    color: black;
}

button {
    box-shadow: 1px 2px 2px lightgray;
    border-radius: 12px;
    border: lightgray solid 1px;
    padding: 0.3rem 0.8rem 0.3rem 0.8rem;
    font-family: "Aleo", serif;
}

@media only screen and (min-width: 600px) {
    #general-container {
        margin-bottom: 3rem;
    }

    .product-frame {
        width: 100%;
    }

    .product-image {
        max-height: 8em;
        margin: 1.5rem auto 1.5rem auto;
    }

    .product-name {
        font-size: 1.5rem;
        margin: 0.4rem auto 0.4rem auto;
    }

}

@media only screen and (min-width: 960px) {
    #general-container {
        margin-bottom: 3rem;
    }

    .product-image {
        max-height: 9em;
        margin: 1.5rem auto 1.5rem auto;
    }

    .product-name {
        font-size: 1.4rem;
        margin: 0.7rem auto 0.7rem auto;
    }

    .product-price {
        font-size: 1.5rem;
    }
}

@media only screen and (min-width: 1264px) {
    #general-container {
        margin-bottom: 1rem;
    }

    .product-image {
        max-height: 8em;
        margin: 1.5rem auto 1.5rem auto;
    }

    .product-name {
        font-size: 1.1rem;
        margin: 0.5rem auto 0.5rem auto;
    }

    .product-price {
        font-size: 1.2rem;
    }
}
</style>