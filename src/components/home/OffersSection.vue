<script setup lang="ts">
    const model = null
</script>

<template>
    <v-sheet class="mx-auto my-carousel-container" elevation="8" width="100%">
        <h2 class="my-carousel-title pt-4">Special Offers</h2>
        <v-slide-group v-model="model" class="pa-4 my-slider" center-active show-arrows next-icon="mdi-chevron-right">
            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
                <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200" width="200"
                    @click="toggle">
                    <div class="d-flex fill-height align-center justify-center">
                        <v-scale-transition>
                            <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                        </v-scale-transition>
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<style lang="scss" scoped>
.my-slider {
    color: white;
}

.my-carousel-container {
    background-color: $dark-gray;
}
.my-carousel-title {
    text-align: center;
    font-family: "Alex Brush", cursive;
    color: white;
    font-size: 2rem;
}
</style>