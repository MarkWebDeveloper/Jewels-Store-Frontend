<script setup lang="ts">
import { useProductsStore } from '@/stores/productsStore';
import { useRouter } from 'vue-router';

const productsStore = useProductsStore()
const router = useRouter()

const categoryName: string = router.currentRoute.value.params.categoryName as string
productsStore.getProductsByCategory(categoryName)
</script>

<template>
    <div>
        
    </div>
</template>

<style lang="scss" scoped>

</style>