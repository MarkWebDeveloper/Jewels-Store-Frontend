<script setup lang="ts">
import ImageService from '@/core/images/ImageService';
import type { IProduct } from '@/core/products/IProduct';
import ProductService from '@/core/products/ProductService';
import { useProductsStore } from '@/stores/productsStore';
import { onMounted, ref } from 'vue';

const productsStore = useProductsStore()

const imageService = new ImageService()
const productService = new ProductService()

const mainImageUrl = ref<string>("/images/placeholder-image.svg")
let file = ref<File | null>()
const files = ref<File[]>([]);

const previewMainImage = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
    mainImageUrl.value = e.target?.result as string;
    };
};

const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target && target.files) {
        file.value = target.files[0];
        previewMainImage(file.value)
        console.log(file.value)
    } else {
        alert('File input event is undefined');
    }
};

const handleFilesUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target && target.files) {
        files.value = Array.from(target.files);
        console.log(files)
    } else {
        alert('File input event is undefined');
    }
};

const removeMainImage = () => {
    mainImageUrl.value = "/images/placeholder-image.svg"
    file.value = null
}

const product = ref<IProduct | undefined>({
id: 0,
productName: '',
productDescription: '',
images: [],
price: 0,
categories: []
})

async function handleSubmit() {

    product.value = productsStore.products.find((product) => product.id == productsStore.newProductId)
    console.log(product.value)


    const formData = new FormData()
    formData.append('file', file.value!)
    files.value.forEach((image) => {
        formData.append(`files`, image);
    });
    console.log(formData.getAll)
    
    try {
        await imageService.post(product.value!.id, formData)
        productsStore.deleteProductFromArray(productsStore.products.findIndex((element) => element.id == product.value!.id))
        const productWithImages = await productService.getOneById(product.value!.id)
        setTimeout(() => {
            productsStore.addProductToArray(productWithImages)
        }, 1000);
    } catch (error) {
        throw new Error ("Unexpected error happened during images upload" + error)
    }
    
}
</script>

<template>
        <div class="form-background">
            <form class="form">
                <v-btn class="close-button" density="comfortable" icon="mdi-close" variant="flat" @click="productsStore.openCloseAddPhotosForm()"></v-btn>
                    <h2 class="form-title">Add Product Photos</h2>
                    <h3 class="titles">Main Image</h3>
                    <label for="main-image-upload" class="main-image-input-label" :title="file?.name">
                        <img class="main-image" :src="mainImageUrl" alt="placeholder-image">
                        <input @change="handleFileUpload" class="main-image-input" type="file" name="file" id="main-image-upload">
                    </label>
                    <button v-if="mainImageUrl != '/images/placeholder-image.svg'" class="main-image-remove-button" @click="removeMainImage">Remove</button>
                    <h3 class="titles">Additional Images</h3>
                    <input @change="handleFilesUpload" type="file" name="files" id="main-image-upload" multiple>
                <v-btn class="send-button rounded-lg" type="button" @click.prevent="handleSubmit">SEND</v-btn>
            </form>
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
    font-weight: bold;
}

.titles {
    display: block;
    text-align: center;
    font-size: 1.3rem;
    font-family: "Aleo", serif;
    margin-bottom: 1rem;
}

#main-image-input-label {
    display: block;
    margin: auto;
}

.main-image-input {
    display: none;
}

.main-image {
    display: block;
    width:15%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
}

.main-image-remove-button {
    display: block;
    width:10%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    font-size: .8rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    border: 1px solid black;
}

.send-button {
    display: block;
    margin: 0 auto 4rem auto;
    margin-bottom: 1rem;
}
</style>