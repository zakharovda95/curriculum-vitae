<template>
  <div class="main-page">
    <div class="content">
      <TheHeader/>
      <TheNavigation/>
      <MainPageContent/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavigation from "~/components/layouts/TheNavigation.vue";
import TheHeader from "~/components/pages/main/TheHeader.vue";
</script>

<style lang="scss">
</style>