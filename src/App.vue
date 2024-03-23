<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useProductsStore } from './stores/productsStore';

const productsStore = useProductsStore()

const gettingProducts = async () => { await productsStore.getAllProducts() }
gettingProducts()
</script>

<template>
  <div>
    <div class="wrapper">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/admin-dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </div>

  <RouterView />
</template>

<style lang="scss" scoped>
.link {
  margin-left: 2rem;
}
</style>
