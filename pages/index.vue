<template>
  <div class="main-page">
    <div class="content">
      <TheHeader/>
      <TheNavigation class="navbar"/>
      <div class="pages">
        <NuxtPage/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavigation from "~/components/layouts/TheNavigation.vue";
import TheHeader from "~/components/pages/main/TheHeader.vue";
</script>

<style scoped lang="scss">
@import "../assets/css/_constants.scss";

.main-page {
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;

    .navbar {
      margin-bottom: 24px;
    }

    .pages {
      width: 70%;
      margin: 0 auto;
      background: white;
      border-radius: 24px;
      height: 100vh;
      padding: 24px;
      box-shadow: 0 0 7px rgba(0,0,0,0.3);
    }
  }
}
</style>