<script setup lang="ts">
import type { IProduct } from '@/core/products/IProduct'
import { useProductsStore } from '@/stores/productsStore';
import EditProductForm from '@/components/admin-dashboard/EditProductForm.vue';
import { ref } from 'vue';
import type { IImage } from '@/core/images/IImage';
import EditProductPhotosForm from './EditProductPhotosForm.vue';
const productsStore = useProductsStore()

const props = defineProps<{
    product: IProduct
}>()

const showProductEditForm = ref<boolean>(false)

const openCloseEditForm = (): void => {
    showProductEditForm.value = !showProductEditForm.value
}

</script>

<template>
    <EditProductForm v-if="showProductEditForm" @openCloseEditEvent="openCloseEditForm" :product="product"/>
    <EditProductPhotosForm v-if="productsStore.showImageEditForm"  :product="product"/>
    <div class="product-container">
        <img class="product-image" :src="productsStore.findMainImage(props.product)" alt="">
        <p class="product-name">{{ props.product.productName }}</p>
        <p class="product-category">{{ props.product.categories[0].categoryName }}</p>
        <p class="product-description">{{ props.product.productDescription }}</p>
        <p class="product-price">{{ productsStore.convertToDecimal(props.product.price) }}€</p>
        <div class="buttons-container">
            <v-btn class="edit-button mr-2" title="Favorites" icon="mdi-pencil" variant="flat"
                density="comfortable" @click="openCloseEditForm()"></v-btn>
            <v-btn class="delete-button mr-2" title="Favorites" icon="mdi-delete" variant="flat" density="comfortable"
                @click="productsStore.deleteProduct(props.product.id)"></v-btn>
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
    margin-right: 2rem;
}

.product-name, .product-price, .product-category {
    font-family: "Aleo", serif;
    width: 30%;
}

.product-description {
    font-family: "Aleo", serif;
    font-size: 1rem;
    width: 50%;
    font-style: italic;
}

.product-price {
    display: block;
    font-family: "Aleo", serif;
    font-size: 1rem;
    width: 10%;
}

.buttons-container {
    width: 10%;
    margin-left: auto
}
</style>