<script setup lang="ts">
import router from '@/router';
import { usePaginationStore } from '@/stores/paginationStore';
import { useProductsStore } from '@/stores/productsStore';
import { onMounted, ref, watch } from 'vue';

const paginationStore = usePaginationStore()
const productsStore = useProductsStore()
onMounted(() => paginationStore.countProductsAndPages())

const categoryName: string = router.currentRoute.value.params.categoryName as string
productsStore.getProductsByCategory(categoryName)

watch (() => paginationStore.currentPage, (): void => {
    productsStore.getProductsByCategory(categoryName)
},
{ deep: true, immediate: true }
)
</script>

<template>
    <v-pagination v-model="paginationStore.currentPage" :length="paginationStore.pagesCount" class="my-4"></v-pagination>
</template>

<style lang="scss" scoped></style>