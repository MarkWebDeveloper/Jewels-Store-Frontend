<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';
import { ref, watch } from 'vue';

const cartStore = useCartStore()
const productsStore = useProductsStore()

const itemsTotalAmount = ref('')
const shippingAmount = ref(0)
const totalAmount = ref('')

function calculateTotalAmount() {
    let itemsTotal = 0
    let total = 0
    for (let index = 0; index < cartStore.products.length; index++) {
        itemsTotal += cartStore.products[index].price;
    }
    itemsTotalAmount.value = productsStore.convertToDecimal(itemsTotal)
    total = itemsTotal + shippingAmount.value
    totalAmount.value = productsStore.convertToDecimal(total)
}

calculateTotalAmount()

watch(() => cartStore.products, (): void => {
    calculateTotalAmount()
})
</script>

<template>
    <div id="total-container">
        <div class="row-container">
            <p class="items-total-row">Items(s) total</p>
            <p class="items-total-row">{{ itemsTotalAmount }}</p>
        </div>
        <div class="row-container">
            <p class="shipping-cost-row">Shipping cost</p>
            <p class="shipping-cost-row">{{ shippingAmount }}</p>
        </div>
        <div class="row-container">
            <p class="total-cost-row">Total</p>
            <p class="total-cost-row">{{ totalAmount }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.total-container {
    display: flex;
    justify-content: center;
}
.row-container {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem 0 2rem;
    margin-bottom: 0.3rem;
}
.items-total-row, .shipping-cost-row, .total-cost-row {
    font-family: "Aleo", serif;
}
.total-cost-row {
    font-weight: bold;
}
</style>