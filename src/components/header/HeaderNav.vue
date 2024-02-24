<script setup lang="ts">

import { ref } from 'vue';
    const searchInput = ref()
</script>

<template>
    <header>
        <v-container class="elevation-3" dense fluid id="navbar-top-mobile">
            <v-row align="center" justify-md="space-between">
                <v-img id="main-logo" title="Home" max-width="150" aspect-ratio="16/9" cover src="/images/logos/jj-full-logo-black.png"
                    class="ml-3"></v-img>

                <v-spacer id="first-row-spacer"></v-spacer>

                <div class="first-row-search-container">
                    <div class="categories-container mr-8">
                        <v-app-bar-nav-icon title="Categories" density="comfortable"></v-app-bar-nav-icon>
                        <p class="categories-title">Categories</p>
                    </div>
                    <div class="search-bar-container">
                        <input v-model="searchInput" class="search-bar" type="text">
                        <v-btn icon="mdi-magnify" title="Search" variant="flat" size="small" density="compact"></v-btn>
                    </div>
                </div>

                <div class="mr-4" id="icons-container">
                    <v-btn class="mr-2" title="Favorites" icon="mdi-heart-outline" variant="flat" density="comfortable"></v-btn>

                    <v-btn class="mr-3" title="Cart" icon="mdi-cart-outline" variant="flat" density="comfortable"></v-btn>

                    <div id="avatar-container" title="Profile">
                        <v-avatar image="/images/pictures/ai-generated-8501940_1920.jpg" size="28"></v-avatar>
                        <img class="mr-4" id="avatar-arrow" src="/images/logos/triangle-arrow.png" alt="">
                    </div>
                    
                </div>

            </v-row>

            <v-row class="second-row-container" justify="space-evenly" justify-sm="space-evenly" justify-md="space-around"
                align="center">
                <div class="categories-container">
                    <v-app-bar-nav-icon density="comfortable" title="Categories"></v-app-bar-nav-icon>
                    <p class="categories-title">Categories</p>
                </div>
                <div class="search-bar-container">
                    <input v-model="searchInput" class="search-bar" type="text">
                    <v-btn icon="mdi-magnify" title="Search" variant="flat" size="small" density="compact"></v-btn>
                </div>
            </v-row>
        </v-container>
    </header>
</template>

<style lang="scss" scoped>
.first-row-search-container {
    display: none;
}

#main-logo {
    cursor: pointer;
}

#icons-container {
    display: flex;
    align-items: center;
}

#avatar-container {
    display: flex;
    align-items: end;
    cursor: pointer;
}

#avatar-arrow {
    height: 7px;
}

.categories-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.categories-title {
    font-family: "Aleo", serif;
    font-size: 0.6rem;
}

.search-bar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    border-radius: 5px;
}

.search-bar {
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    min-width: 200px;
}

@media only screen and (min-width: 600px) {
    .search-bar {
        min-width: 350px;
    }
}

@media only screen and (min-width: 960px) {
    .second-row-container {
        display: none;
    }

    .first-row-search-container {
        display: flex;
        justify-content: space-evenly;
        height: 1.5rem;
    }

    .search-bar {
        min-width: 450px;
    }

    #first-row-spacer {
        display: none;
    }

}
</style>