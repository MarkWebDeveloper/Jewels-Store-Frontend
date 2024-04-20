<script setup lang="ts">
import type { IProductDTO } from '@/core/products/IProductDTO';
import { useCategoriesStore } from '@/stores/categoriesStore';
import { useProductsStore } from '@/stores/productsStore';
import { ref } from 'vue';

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const gettingCategories = async () => { await categoriesStore.getAllCategories() }
gettingCategories()

function itemProps(item:any) {
        return {
          title: item.categoryName
        }
    }

const productName = ref<string>("")
const categoryId = ref<number>(0)
const productDescription = ref<string>("")
const price = ref<number>(0)

let newProduct: IProductDTO = {
    productName: "",
    productDescription: "",
    categoryId: 1,
    price: 0
}

function submitForm() {
    newProduct.productName = productName.value
    newProduct.categoryId = categoryId.value
    newProduct.productDescription = productDescription.value
    newProduct.price = price.value
    try {
        productsStore.saveProduct(newProduct)
        productName.value = ""
        categoryId.value = 0
        productDescription.value = ""
        price.value = 0
    } catch (error) {
        return
    }
}

</script>

<template>
    <div class="form-background">
        <form @submit.prevent="submitForm" class="form">
            <v-btn class="close-button" density="comfortable" icon="mdi-close" variant="flat"
                @click="$emit('openCloseEvent')"></v-btn>
                <h2 class="form-title">Create New Product</h2>
                <v-text-field class="product-name-input" v-model="productName" hide-details="auto" label="Product Name" clearable density="comfortable" required></v-text-field>
                <v-select class="categories-dropdown" v-model="categoryId" label="Category" :items="categoriesStore.categories" :item-props="itemProps" variant="outlined" density="comfortable" v-if="categoriesStore.isLoaded" item-value="id"></v-select>
                <v-text-field class="description-input" v-model="productDescription" hide-details="auto" label="Description" clearable density="comfortable" required></v-text-field>
                <v-text-field class="price-input" v-model="price" hide-details="auto" label="Price" prefix="€" clearable density="comfortable" required></v-text-field>
                <v-btn class="send-button rounded-lg" type="submit">SEND</v-btn>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.form-background {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.2);
    z-index: 99;
}

.form {
    width: 40rem;
    background-color: white;
    border-radius: 1rem;
    margin-top: 5%;
}

.close-button {
    margin: 1rem 1rem 0 auto;
    display: block;
}

.form-title {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    font-family: "Aleo", serif;
    margin-bottom: 1rem;
}

.product-name-input, .description-input, .price-input {
    width: 70%;
    text-align: center;
    margin: 0 auto 1rem auto;
}

.categories-dropdown {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

.send-button {
    display: block;
    margin: 0 auto 4rem auto;
    margin-bottom: 1rem;
}
</style>