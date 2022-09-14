<template>
  <UILoading v-if="summaryPageStore.isLoading" />
  <div v-else class="summary-page">
    <ThePreviews v-if="isElementHidden" class="preview" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import ThePreviews from '~/components/pages/main/ThePreviews.vue';
import UILoading from '~/components/UI/UILoading.vue';

import { hidePageElement } from '~/helpers/methods/route.methods';
import { useSummaryPageStore } from '~/stores/summary-page.store';

import { computed, Ref } from 'vue';

const isElementHidden: Ref<boolean> = computed(() => hidePageElement());

const summaryPageStore = useSummaryPageStore();

summaryPageStore.getData();
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .summary-page {
    .preview {
      display: flex;
      align-self: center;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .summary-page {
    .preview {
      display: flex;
      align-self: center;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
}

@media (min-width: 1400px) {
  .summary-page {
    .preview {
      display: flex;
      align-self: center;
      margin-top: 24px;
      margin-left: 24px;
    }
  }
}
</style>
