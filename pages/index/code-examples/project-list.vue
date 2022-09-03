<template>
  <div class="project-list-page"></div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'section',
});
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .project-list-page {
    width: 100%;
    height: 90vh;
    background: $MAIN_BANNER;
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .project-list-page {
    width: 100%;
    height: 90vh;
    background: $MAIN_BANNER;
  }
}

@media (min-width: 1400px) {
  .project-list-page {
    width: 100%;
    height: 90vh;
    background: $MAIN_BANNER;
  }
}
</style>
