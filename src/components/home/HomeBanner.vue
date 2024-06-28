<script setup lang="ts">
</script>

<template>
    <div class="banner">
        <!-- <img
  src="/images/pictures/ai-generated-8501940_1920.jpg"
  alt="Banner image"
/> -->
    </div>
</template>

<style lang="scss" scoped>
//     img {
//         object-fit: contain;
//         width: 100%;
//         min-height: 150px;
//         object-position: 0% 75%;
//     }

//     @media only screen and (min-width: 600px) {
//     img {
//         min-height: 200px;
//         object-position: 0% 70%;
//     }
// }

// @media only screen and (min-width: 960px) {
//     img {
//         min-height: 200px;
//         object-position: 0% 65%;
//     }
// }

.banner {
    width: 100%;
    background-image: url(/images/pictures/ai-generated-8501940_1920.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100% 65%;
    padding: 5rem;
}

@media only screen and (min-width: 600px) {
    .banner {

        padding: 8em;
    }
}

@media only screen and (min-width: 992px) {
    .banner {
        padding: 9em;
    }
}

@media only screen and (min-width: 1400px) {
    .banner {
        padding: 10em;
    }
}
</style>