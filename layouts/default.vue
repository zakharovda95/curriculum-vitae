<template>
  <div id="default-layout">
    <TheTop id="top" />
    <slot />
  </div>
</template>

<script setup>
import TheTop from '~/components/layouts/TheTop.vue';
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

#default-layout {
  background: $LAYOUT;
}
</style>
