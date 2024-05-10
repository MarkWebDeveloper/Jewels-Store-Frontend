<script setup lang="ts">
import type { IImage } from '@/core/images/IImage';
import ImageService from '@/core/images/ImageService';
import type { IProduct } from '@/core/products/IProduct';
import type { IProductDTO } from '@/core/products/IProductDTO';
import { useCategoriesStore } from '@/stores/categoriesStore';
import { useImagesStore } from '@/stores/imagesStore';
import { useProductsStore } from '@/stores/productsStore';
import { onMounted, ref } from 'vue';

const imagesStore = useImagesStore()
const imageService = new ImageService

const props = defineProps<{
    product: IProduct
}>()

const uri: string = import.meta.env.VITE_APP_API_IMGS
let downloadedImageBlob: Blob

const refillPhotos = (): void => {
    imagesStore.oldMainImageName = props.product.images.find((image) => image.mainImage == true)?.imageName
    const oldOtherImages: IImage[] = props.product.images.filter((image) => image.mainImage == false)
    console.log(oldOtherImages)
    for (let index = 0; index < oldOtherImages.length; index++) {
        imagesStore.oldOtherImageNames?.push(oldOtherImages[index].imageName)
    }
    imagesStore.oldMainImageUrl = uri + `/${imagesStore.oldMainImageName}`
    console.log(imagesStore.oldMainImageUrl)
} 

onMounted(async() => {
    refillInputs(props.product)
    refillPhotos()
    for (let index = 0; index < props.product.images.length; index++) {
        if (props.product.images[index].mainImage != true) {
            downloadedImageBlob = await imageService.getOneAsFile(props.product.images[index].imageName)
            let file: File = new File([downloadedImageBlob], props.product.images[index].imageName, {
                type: "image/png"
            })
            console.log(file)
            imagesStore.images.push(file)
            console.log(imagesStore.images)
        }
        
    }
})

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

productsStore.editingProductId = props.product.id

const gettingCategories = async () => { await categoriesStore.getAllCategories() }
gettingCategories()

function refillInputs(product: IProduct): void {
    productName.value = product.productName
    categoryId.value = product.categories[0].id
    productDescription.value = product.productDescription
    price.value = product.price
}

function itemProps(item:any): any {
        return {
          title: item.categoryName
        }
    }

const productName = ref<string>("")
const categoryId = ref<number>(0)
const productDescription = ref<string>("")
const price = ref<number>(0)

let editedProduct: IProductDTO = {
    productName: "",
    productDescription: "",
    categoryId: 1,
    price: 0
}

function submitForm() {
    editedProduct.productName = productName.value
    editedProduct.categoryId = categoryId.value
    editedProduct.productDescription = productDescription.value
    editedProduct.price = price.value
    try {
        productsStore.updateProduct(editedProduct, props.product.id)
        productName.value = ""
        categoryId.value = 0
        productDescription.value = ""
        price.value = 0
    } catch (error) {
        return
    }
}

</script>

<template>
    <div class="form-background">
        <form @submit.prevent="submitForm(), $emit('openCloseEditEvent'), $emit('openCloseImagesEditEvent')" class="form">
            <v-btn class="close-button" density="comfortable" icon="mdi-close" variant="flat"
                @click="$emit('openCloseEditEvent')"></v-btn>
                <h2 class="form-title">Edit Product</h2>
                <v-text-field class="product-name-input" v-model="productName" hide-details="auto" label="Product Name" clearable density="comfortable" required></v-text-field>
                <v-select class="categories-dropdown" v-model="categoryId" label="Category" :items="categoriesStore.categories" :item-props="itemProps" variant="outlined" density="comfortable" v-if="categoriesStore.isLoaded" item-value="id"></v-select>
                <v-text-field class="description-input" v-model="productDescription" hide-details="auto" label="Description" clearable density="comfortable" required></v-text-field>
                <v-text-field class="price-input" v-model="price" hide-details="auto" label="Price (in cents)" prefix="€" clearable density="comfortable" required></v-text-field>
                <v-btn class="send-button rounded-lg" type="submit">SEND</v-btn>
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
    // background-color: rgba($color: #000000, $alpha: 0.2);
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

.product-name-input, .description-input, .price-input {
    width: 70%;
    text-align: center;
    margin: 0 auto 1rem auto;
}

.categories-dropdown {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

.send-button {
    display: block;
    margin: 0 auto 4rem auto;
    margin-bottom: 1rem;
}
</style>