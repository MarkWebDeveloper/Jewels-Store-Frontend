<script setup lang="ts">
import { useImagesStore } from '@/stores/imagesStore';
import { ref, watch } from 'vue';

const imagesStore = useImagesStore()

const props = defineProps<{
    file: File
}>()

watch (() => imagesStore.images, (): void => {
    const reader = new FileReader();
    reader.readAsDataURL(props.file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
        imageUrl.value = e.target?.result as string;
        console.log(imageUrl.value)
    };
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
        <div class="mini-image-background">
            <div class="mini-image" :style="{'background-image': 'url(' + imageUrl + ')'}" alt="image"></div>
        </div>
        <v-btn v-if="imageUrl != '/images/placeholder-image.svg'" class="image-remove-button" type="button" @click="removeImage" size="x-small">REMOVE</v-btn>
    </div>
</template>

<style lang="scss" scoped>
.mini-image-background {
    background-color: rgb(213, 213, 213);
    border-radius: 0.5rem;
    width: 100%;
}

.mini-image {
    width: 100%;
    padding: 50%;
    margin-bottom: 0.5rem;
    background-size: contain;
    background-position: center;
    border-radius: 0.5rem;

}

.image-remove-button {
    display: block;
    margin: auto auto 1rem auto;
    font-size: .8rem;
    border-radius: 0.5rem;
    background-color: #5d5d5d;
    color: white;
    align-self: flex-end;
}

.image-button-container {
    width: 7rem;
}

@media only screen and (min-width: 600px) {

    .image-button-container {
        width: 8rem;
    }
}

@media only screen and (min-width: 960px) {

    .mini-image {
        width: 100%;
        padding: 50%;
        margin-bottom: 0.5rem;
        background-size: contain;
        background-position: center;
        border-radius: 0.5rem;

    }

    .image-remove-button {
        margin: auto auto 2rem auto;
    }

    .image-button-container {
        width: 7rem;
    }
}

@media only screen and (min-width: 1264px) {
    .image-remove-button {
        margin: auto auto 3rem auto;
    }
}
</style>