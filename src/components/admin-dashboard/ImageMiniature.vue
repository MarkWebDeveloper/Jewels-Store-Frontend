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
    reader.onload = (e: ProgressEvent<FileReader>) => {
        imageUrl.value = e.target?.result as string;
    };
    reader.readAsDataURL(props.file);
},
{ deep: true, immediate: true }
)

const removeImage = (): void => {
    imageUrl.value = "/images/placeholder-image.svg"
    const imageIndex = imagesStore.images.indexOf(props.file)
    imagesStore.images.splice(imageIndex, 1)
    console.log(imagesStore.images)
}

const imageUrl = ref<string>("/images/placeholder-image.svg")
</script>

<template>
    <div class="image-button-container">
        <img class="mini-image" :src="imageUrl" alt="image">
        <v-btn v-if="imageUrl != '/images/placeholder-image.svg'" class="image-remove-button" type="button" @click="removeImage" size="x-small">REMOVE</v-btn>
    </div>
</template>

<style lang="scss" scoped>
.mini-image {
    width: 5rem;
    margin-bottom: 0.5rem;
}

.image-remove-button {
    display: block;
    margin: auto auto 2rem auto;
    font-size: .8rem;
    border-radius: 0.5rem;
    background-color: #5d5d5d;
    color: white;
    align-self: flex-end;
}

.image-button-container {
    margin-left: 1rem;
}
</style>