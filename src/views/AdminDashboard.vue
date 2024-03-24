<script setup lang="ts">
import HeaderNav from '@/components/header/HeaderNav.vue';
import Product from '@/components/admin-dashboard/Product.vue';
import { useProductsStore } from '@/stores/productsStore';
import { ref } from 'vue';
import CreateProductForm from '@/components/admin-dashboard/CreateProductForm.vue';
import Alerts from '@/components/admin-dashboard/Alerts.vue';

const productsStore = useProductsStore()

const createFormIsOpened = ref<Boolean>(false)

const openCloseCreateForm = () => {
  createFormIsOpened.value = !createFormIsOpened.value
}

</script>

<template>
  <HeaderNav />
  <main>
    <Alerts />
    <h1 class="products-title">Products</h1>
    <v-btn class="new-product-button rounded-lg" @click.prevent="openCloseCreateForm()"><v-icon icon="mdi-plus"
        start></v-icon>New Product</v-btn>
    <CreateProductForm v-if="createFormIsOpened" @openCloseEvent="openCloseCreateForm" />
    <div class="products-container">
      <Product v-for="product in productsStore.products" :key="product.id" v-if="productsStore.isLoaded" :product="product" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.new-product-button {
  border: 0.1rem solid black;
  margin-left: 5%;
  margin-bottom: 2%;
}

.products-title {
  font-family: "Alex Brush", cursive;
  text-align: center;
  margin: 1rem;
  font-size: 2rem;
}

.products-container {
  margin: auto;
  padding: 1rem 0 1rem 0;
  background-color: rgb(220, 220, 220);
  width: 95%;
  border: 0.1rem solid black;
  border-radius: 1.5rem;
}
</style>
