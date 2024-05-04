<script setup lang="ts">
import { useImagesStore } from '@/stores/imagesStore';
import type { storeToRefs } from 'pinia';
import { ref, watch, watchEffect } from 'vue';

const imagesStore = useImagesStore()

const props = defineProps<{
    file: File
    arr: Array<File>
}>()

watch (() => imagesStore.images, (): void => {
    const reader = new FileReader();
    reader.readAsDataURL(props.file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
    imageUrl.value = e.target?.result as string;
    };
},
)

const previewImage = (file: File): void => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
    imageUrl.value = e.target?.result as string;
    };
};

const imageUrl = ref<string>("/images/placeholder-image.svg")
</script>

<template>
    <img class="miniImage" :src="imageUrl" alt="image">
</template>

<style lang="scss" scoped>
.miniImage {
    width: 5rem;
    margin: 0 0 0 3%;
}
</style>