<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useProductsStore } from './stores/productsStore';
import { useCategoriesStore } from './stores/categoriesStore';
import { useAlertsStore } from './stores/alertsStore';
import { useImagesStore } from './stores/imagesStore';
import { useHeaderStore } from './stores/headerStore';
import { useLoginStore } from './stores/loginStore';
import HeaderNav from './components/header/HeaderNav.vue';
import { useCartStore } from './stores/cartStore';

const categoriesStore = useCategoriesStore()
const cartStore = useCartStore()
useProductsStore()
useAlertsStore()
useImagesStore()
useHeaderStore()
useLoginStore()

categoriesStore.getAllCategories()
cartStore.createEventForCartSyncOnClose()
cartStore.synchronizeWithStoredCart()

</script>

<template>
  <div>
    <div class="wrapper">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/admin-dashboard">Dashboard</RouterLink>
        <RouterLink class="link" to="/stripe-payment">Stripe</RouterLink>
      </nav>
    </div>
    <HeaderNav />
  </div>

  <RouterView />
</template>

<style lang="scss" scoped>
.link {
  margin-left: 2rem;
}
</style>
