<script setup lang="ts">
import HeaderNav from '@/components/header/HeaderNav.vue';
import Product from '@/components/admin-dashboard/Product.vue';
import { useProductsStore } from '@/stores/productsStore';

const productsStore = useProductsStore()
</script>

<template>
  <HeaderNav />
  <main>
    <h1 class="products-title">Products</h1>
    <div class="products-container">
      <Product v-for="product in productsStore.products" v-if="productsStore.isLoaded" :product="product"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.products-title {
  font-family: "Alex Brush", cursive;
  text-align: center;
  margin: 1.5rem;
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
