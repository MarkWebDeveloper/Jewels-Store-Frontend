<script setup lang="ts">

</script>

<template>
    <header>
        <v-app>
            <v-container>
                <v-app-bar 
                app 
                dense 
                id="navbar-top-mobile" 
                color="white" 
                :elevation="0">
                    <img id="jj-logo" src="./../../../public/images/logos/jj-full-logo-black.png" alt="">

                    <template v-slot:append>
                        <v-btn icon="mdi-heart-outline"></v-btn>

                        <v-btn icon="mdi-cart-outline"></v-btn>

                        <v-avatar image="/images/pictures/ai-generated-8501940_1920.jpg" size="32" class="ml-2"></v-avatar>
                    </template>

                </v-app-bar>
            </v-container>

            <v-container>
                <v-app-bar id="navbar-bottom-mobile" 
                app
                :elevation="5">

                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <p id="categories-title">Categories</p>

                    <template v-slot:append>
                        <v-text-field  
                        class="search-bar" 
                        density="compact" 
                        hide-details 
                        single-line 
                        rounded
                        clearable
                        variant="outlined"
                        append-inner-icon="mdi-magnify">
                        </v-text-field>
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

.search-bar {
    min-width: 220px;
    font-size: 10px;
}

.align-center {
    align-items: center; /* Vertically center the content */
  }
</style>