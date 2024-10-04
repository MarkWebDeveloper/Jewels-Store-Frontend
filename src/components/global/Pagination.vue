<script setup lang="ts">
import ProductService from '@/core/products/ProductService';
import { usePaginationStore } from '@/stores/paginationStore';
import { onMounted, ref } from 'vue';

const paginationStore = usePaginationStore()
onMounted(() => paginationStore.countProductsAndPages())

const page = ref(1);
</script>

<template>
    <v-pagination v-model="page" :length="paginationStore.pagesCount" class="my-4"></v-pagination>
</template>

<style lang="scss" scoped></style>