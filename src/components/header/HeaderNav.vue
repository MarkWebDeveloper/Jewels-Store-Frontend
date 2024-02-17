<script setup lang="ts">

</script>

<template>
    <header>
        <v-app>
            <v-container>
                <v-app-bar :elevation="5">

                    <img id="jj-logo" src="./../../../public/images/logos/jj-full-logo-black.png" alt="">

                    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <p id="categories-title">Categories</p> -->

                    <template v-slot:append>
                        <v-btn icon="mdi-heart-outline"></v-btn>

                        <v-btn icon="mdi-cart-outline"></v-btn>

                        
                    </template>
                </v-app-bar>
            </v-container>
        </v-app>
    </header>
</template>

<style lang="scss" scoped>
#jj-logo {
    width: 100px;
    margin-left: 3%;
}

#categories-title {
    font-family: "Aleo", serif;
    font-size: 0.6rem;
}
</style>