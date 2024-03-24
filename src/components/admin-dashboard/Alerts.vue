<script setup lang="ts">
import { useProductsStore } from '@/stores/productsStore';

const productsStore = useProductsStore()

</script>

<template>
    <v-alert class="alert" text="New product is saved successfully" type="success" v-if="productsStore.showProductSaveSuccessAlert"></v-alert>
    <v-alert class="alert" text="Unexpected error occurred during the save process of the new product" type="error" v-if="productsStore.showProductSaveFailedAlert"></v-alert>
    <v-alert class="alert" text="Product is deleted successfully" type="success" v-if="productsStore.showProductDeleteSuccessAlert"></v-alert>
    <v-alert class="alert" text="Unexpected error occurred during the product delete process" type="error" v-if="productsStore.showProductDeleteFailedAlert"></v-alert>
    <v-alert class="alert" text="Product is updated successfully" type="success" v-if="productsStore.showProductUpdateSuccessAlert"></v-alert>
    <v-alert class="alert" text="Unexpected error occurred during the product update process" type="error" v-if="productsStore.showProductUpdateFailedAlert"></v-alert>
</template>

<style lang="scss" scoped>
.alert {
    position: fixed;
    top: 0;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    z-index: 100;
}
</style>