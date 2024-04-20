<script setup lang="ts">
import type { IProduct } from '@/core/products/IProduct';
import { useProductsStore } from '@/stores/productsStore';

const props = defineProps<{
    product: IProduct
}>()

const productsStore = useProductsStore()

function submitForm() {

    try {
        console.log("done")
    } catch (error) {
        return
    }
}
</script>

<template>
    <div>
        <div class="form-background">
            <form @submit.prevent="submitForm(), productsStore.openCloseEditPhotosForm()" class="form">
            <v-btn class="close-button" density="comfortable" icon="mdi-close" variant="flat"
                @click="productsStore.openCloseEditPhotosForm()"></v-btn>
                <h2 class="form-title">Edit Product Photos</h2>
                <h3 class="main-photo-title">Main Photo</h3>
                <v-btn class="send-button rounded-lg" type="submit">SEND</v-btn>
        </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.form-background {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.2);
    z-index: 99;
}

.form {
    width: 40rem;
    background-color: white;
    border-radius: 1rem;
    margin-top: 5%;
}

.close-button {
    margin: 1rem 1rem 0 auto;
    display: block;
}

.form-title {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    font-family: "Aleo", serif;
    margin-bottom: 1rem;
}
</style>