<template>
  <div class="the-header">
    <MainBanner class="banner"/>
    <UIButton class="show-contacts">
      Click to show contacts
      <template #icon-right>
        <img src="assets/img/click.svg">
      </template>
    </UIButton>
  </div>
</template>

<script setup lang="ts">

import MainBanner from "~/components/shared/MainBanner.vue";
import UIButton from "~/components/ui/UIButton.vue";
</script>

<style scoped lang="scss">
@import "../../../assets/css/_constants.scss";

.the-header {
  display: flex;
  width: 100%;
  height: 582px;
  background: $MAIN_AQUAMARINE;

  .show-contacts {
    height: 20px;
    width: 200px;
    margin: -80px;
    transform: rotate(270deg);
    align-self: center;
    font-size: 1.2rem;
  }
}
</style>