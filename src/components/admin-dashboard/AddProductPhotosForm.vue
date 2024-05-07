<script setup lang="ts">
import ImageService from '@/core/images/ImageService';
import ProductService from '@/core/products/ProductService';
import { useProductsStore } from '@/stores/productsStore';
import ImageMiniature from './ImageMiniature.vue';
import { useImagesStore } from '@/stores/imagesStore';
import { useAlertsStore } from '@/stores/alertsStore';

const productsStore = useProductsStore()
const imagesStore = useImagesStore()
const alertsStore = useAlertsStore()

const imageService = new ImageService()
const productService = new ProductService()

async function handleSubmit(): Promise<void> {

    const formData = new FormData()
    formData.append('file', imagesStore.image!)
    imagesStore.images.forEach((image) => {
        formData.append(`files`, image);
    });
    console.log(formData.getAll)
    
    try {
        await imageService.post(productsStore.newProductId, formData)
        productsStore.deleteProductFromArray(productsStore.products.findIndex((element) => element.id == productsStore.newProductId))
        const productWithImages = await productService.getOneById(productsStore.newProductId)
        setTimeout(() => {
            productsStore.addProductToArray(productWithImages)
        }, 1000);
        productsStore.showImageUploadForm = false
        imagesStore.resetImagesForm()
        alertsStore.createAlert("success", "Images are uploaded successfully")
    } catch (error) {
        alertsStore.createAlert("error", "Unexpected error occurred during the images upload")
        throw new Error ("Unexpected error happened during images upload" + error)
    }
    
}
</script>

<template>
    <div class="form-background">
        <form class="form">
            <v-btn class="close-button" density="comfortable" icon="mdi-close" variant="flat"
                @click="productsStore.openCloseAddPhotosForm(), imagesStore.resetImagesForm()"></v-btn>
            <h2 class="form-title">Add Product Photos</h2>
            <h3 class="titles">Main Image</h3>
            <label for="main-image-upload" class="main-image-input-label" :title="imagesStore.image?.name">
                <div class="main-image-background">
                    <div class="main-image"
                        :class="{ smallmargin: imagesStore.mainImageUrl != '/images/placeholder-image.svg' }"
                        :style="{ 'background-image': 'url(' + imagesStore.mainImageUrl + ')' }" alt="image"></div>
                </div>
                <!-- <img class="main-image"
                    :class="{ smallmargin: imagesStore.mainImageUrl != '/images/placeholder-image.svg' }"
                    :src="imagesStore.mainImageUrl" alt="placeholder-image"> -->
                <input @change="imagesStore.handleFileUpload" class="main-image-input" type="file" name="file"
                    id="main-image-upload">
            </label>
            <v-btn v-if="imagesStore.mainImageUrl != '/images/placeholder-image.svg'" class="main-image-remove-button"
                type="button" @click="imagesStore.removeMainImage" size="x-small">REMOVE</v-btn>
            <h3 class="titles">Additional Images</h3>
            <div class="other-images-container">
                <ImageMiniature v-for="image in imagesStore.images" v-if="imagesStore.images.length > 0"
                    :file="image" />
                <label for="other-images-upload" class="other-images-label">
                    <div class="add-image-div">
                        <img src="/images/logos/plus.svg" alt="plus" class="plus-image">
                    </div>
                    <input @change="imagesStore.handleFilesUpload" type="file" name="files" class="other-images-input"
                        id="other-images-upload" multiple>
                </label>
            </div>
            <v-btn class="send-button rounded-lg" type="button" @click.prevent="handleSubmit">SEND</v-btn>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.form-background {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.2);
    z-index: 99;
    overflow-y: auto;
}

.form {
    width: 27rem;
    margin: 5% 0 5% 0;
    background-color: white;
    border-radius: 1rem;
}

.close-button {
    margin: 1rem 1rem 0 auto;
    display: block;
}

.form-title {
    display: block;
    text-align: center;
    font-size: 1.2rem;
    font-family: "Aleo", serif;
    margin-bottom: 1rem;
    font-weight: bold;
}

.titles {
    display: block;
    text-align: center;
    font-size: 1.1rem;
    font-family: "Aleo", serif;
    margin-bottom: 1rem;
}

.other-images-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2%;
}

#main-image-input-label {
    display: block;
    margin: auto;
}

.main-image-input {
    display: none;
}

.main-image-background {
    background-color: rgb(213, 213, 213);
    border-radius: 0.5rem;
    width: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
}

.main-image {
    display: block;
    width: 100%;
    padding: 50%;
    background-size: contain;
    background-position: center;
}

.main-image-remove-button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    font-size: .8rem;
    border-radius: 0.5rem;
    background-color: #5d5d5d;
    color: white;
}

.other-images-input {
    display: none;
}

.add-image-div {
    width: 7rem;
    padding: 35%;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 1rem;
    border: 1px solid black;
    margin-bottom: 1rem
}

.plus-image {
    width: 2rem;
}

.send-button {
    display: block;
    margin: 0 auto 1rem auto;
    background-color: #5d5d5d;
    color: white;
}

.smallmargin {
    margin-bottom: 0.5rem;
}

@media only screen and (min-width: 600px) {

    .form {
        width: 30rem;
    }

    .close-button {
        margin: 1rem 1rem 0 auto;
        display: block;
    }

    .form-title {
        font-size: 1.3rem;
    }

    .titles {
        font-size: 1.2rem;
    }

    .main-image-background {
        width: 9rem;
    }

    .add-image-div {
        width: 8rem;
    }

    .plus-image {
        width: 3rem;
    }
}

@media only screen and (min-width: 960px) {

    .form {
        width: 45rem;
    }

    .form-title {
        font-size: 1.5rem;
    }

    .titles {
        font-size: 1.3rem;
    }

    .send-button {
        margin-bottom: 2rem;
    }

    .add-image-div {
        width: 7rem;
    }

    .plus-image {
        width: 2rem;
    }
}


@media only screen and (min-width: 1264px) {

    .form {
        width: 50rem;
    }

    .send-button {
        margin-bottom: 3rem;
    }

}
</style>