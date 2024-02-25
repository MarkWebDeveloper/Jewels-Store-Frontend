<script setup lang="ts">
</script>

<template>
    <div>
        <img
  src="/images/pictures/ai-generated-8501940_1920.jpg"
  alt="Banner image"
/>
    </div>
</template>

<style lang="scss" scoped>
    img {
        object-fit: cover;
        width: 100%;
        height: 150px;
        object-position: 0% 75%;
    }

    @media only screen and (min-width: 600px) {
    img {
        height: 200px;
        object-position: 0% 70%;
    }
}

@media only screen and (min-width: 960px) {
    img {
        height: 200px;
        object-position: 0% 65%;
    }
}
</style>