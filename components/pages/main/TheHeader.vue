<template>
  <div class="the-header">
    <MainBanner/>
  </div>
</template>

<script setup lang="ts">

import MainBanner from "~/components/pages/main/MainBanner.vue";
</script>

<style scoped lang="scss">
@import "../../../assets/css/_constants.scss";

.the-header {
  display: flex;
  width: 100%;
  height: 582px;
  background: $MAIN_AQUAMARINE;
}
</style>