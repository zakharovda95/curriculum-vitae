<template>
  <div class="summary-page">
    <ThePreviews class="preview" />
  </div>
</template>

<script setup lang="ts">
import ThePreviews from '~/components/pages/main/ThePreviews.vue';
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .summary-page {
    padding: 24px;
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .summary-page {
    padding: 24px;
  }
}

@media (min-width: 1400px) {
  .summary-page {
    padding: 24px;
  }
}
</style>
