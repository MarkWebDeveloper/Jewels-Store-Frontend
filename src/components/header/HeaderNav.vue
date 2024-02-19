<script setup lang="ts">

</script>

<template>
    <header>
        <v-container class="elevation-3" dense id="navbar-top-mobile">
            <v-row align="center">
                <v-img max-width="150" aspect-ratio="16/9" cover src="/images/logos/jj-full-logo-black.png"
                    class="ml-2"></v-img>

                <v-spacer></v-spacer>

                <v-btn class="mr-2" icon="mdi-heart-outline" variant="flat" density="comfortable"></v-btn>

                <v-btn class="mr-3" icon="mdi-cart-outline" variant="flat" density="comfortable"></v-btn>

                <v-avatar image="/images/pictures/ai-generated-8501940_1920.jpg" size="28" class="mr-4"></v-avatar>
            </v-row>

            <v-row align="center">
                <v-app-bar-nav-icon class="ml-3" density="comfortable"></v-app-bar-nav-icon>
                <p id="categories-title">Categories</p>
                <v-spacer></v-spacer>
                <div class="mr-3" id="search-bar-container">
                    <input id="search-bar" type="text">
                    <v-btn icon="mdi-magnify" variant="flat" size="small" density="compact"></v-btn>
                </div>
            </v-row>
        </v-container>
    </header>
</template>

<style lang="scss" scoped>
#categories-title {
    font-family: "Aleo", serif;
    font-size: 0.6rem;
}

#search-bar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    border-radius: 5px;
}

#search-bar {
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    min-width: 200px;
}
</style>