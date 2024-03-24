<script setup lang="ts">
import type { IProduct } from '@/core/products/IProduct'
import { useProductsStore } from '@/stores/productsStore';
import EditProductForm from '@/components/admin-dashboard/EditProductForm.vue';
import { ref } from 'vue';
const productsStore = useProductsStore()

const props = defineProps<{
    product: IProduct
}>()

function findMainImage(): string | undefined {
    const mainImage = props.product.images.find(image => image.mainImage == true)
    const mainImageName = mainImage?.imageName
    const imageDirectory = 'http://localhost:8080/api/v1/images/' + mainImageName
    return imageDirectory
}
const editFormIsOpened = ref<boolean>(false)

const openCloseEditForm = () => {
    editFormIsOpened.value = !editFormIsOpened.value
}
</script>

<template>
    <EditProductForm v-if="editFormIsOpened" @openCloseEditEvent="openCloseEditForm" :product="product"/>
    <div class="product-container">
        <img class="product-image" :src="findMainImage()" alt="">
        <p class="product-name">{{ props.product.productName }}</p>
        <p class="product-description">{{ props.product.productDescription }}</p>
        <div class="buttons-container">
            <v-btn class="edit-button mr-2" title="Favorites" icon="mdi-pencil" variant="flat"
                density="comfortable" @click="openCloseEditForm()"></v-btn>
            <v-btn class="delete-button mr-2" title="Favorites" icon="mdi-delete" variant="flat" density="comfortable"
                @click="productsStore.deleteProductFromArray(productsStore.products.findIndex((element) => element.id == props.product.id)), productsStore.deleteProduct(props.product.id)"></v-btn>
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