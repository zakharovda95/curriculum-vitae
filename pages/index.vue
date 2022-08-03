<template>
  <div class="main-page">
    <TheHeader id="header" />
    <TheNavigation class="navbar" id="navbar" />
    <div class="pages">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavigation from '~/components/layouts/TheNavigation.vue';
import TheHeader from '~/components/pages/main/TheHeader.vue';
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

.main-page {
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;

    .pages {
      width: 100%;
    }
  }
}
</style>
