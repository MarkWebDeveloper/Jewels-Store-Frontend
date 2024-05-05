<script setup lang="ts">
import { useAlertsStore } from '@/stores/alertsStore';

const alertsStore = useAlertsStore()

</script>

<template>
    <v-alert class="alert" :text="alertsStore.alertText" type="success" v-if="alertsStore.showSuccessAlert"></v-alert>
    <v-alert class="alert" :text="alertsStore.alertText" type="error" v-if="alertsStore.showErrorAlert"></v-alert>
</template>

<style lang="scss" scoped>
.alert {
    position: fixed;
    top: 0;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    z-index: 100;
}
</style>