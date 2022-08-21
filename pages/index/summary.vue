<template>
  <div class="summary-page">
    <ThePreviews v-if="isElementHidden" class="preview" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import ThePreviews from '~/components/pages/main/ThePreviews.vue';
import { computed } from 'vue';
import { hidePageElement } from '~/helpers/methods/route.methods';

const isElementHidden = computed(() => hidePageElement());
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .summary-page {
    padding: 0;

    .preview {
      margin-top: 24px;
      margin-bottom: 24px;
      display: flex;
      align-self: center;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .summary-page {
    padding: 0;

    .preview {
      display: flex;
      align-self: center;
    }
  }
}

@media (min-width: 1400px) {
  .summary-page {
    padding-left: 24px;

    .preview {
      display: flex;
      align-self: center;
      margin-top: 24px;
    }
  }
}
</style>
