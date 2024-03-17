<script setup lang="ts">
import HeaderNav from '@/components/header/HeaderNav.vue';
import CategoriesSection from '@/components/home/CategoriesSection.vue';
import HomeBanner from '@/components/home/HomeBanner.vue';
import OffersSection from '@/components/home/OffersSection.vue';

</script>

<template>
    <!-- <HeaderNavVuetify /> -->
    <HeaderNav />
    <main>
      <HomeBanner />
      <!-- <OffersSection /> -->
      <CategoriesSection />
    </main>
</template>

<style lang="scss" scoped>

</style>