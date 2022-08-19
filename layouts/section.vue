<template>
  <div id="section-layout">
    <TheTop id="top" />
    <TheNavigation class="navbar" id="navbar" />
    <slot />
  </div>
</template>

<script setup>
import TheTop from '~/components/layouts/TheTop.vue';
import TheNavigation from '../components/layouts/TheNavigation';
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

#default-layout {
  background: $LAYOUT;
}
</style>
