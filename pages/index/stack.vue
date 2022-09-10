<template>
  <UILoading v-if="stackPageStore.isLoading" />
  <div class="stack-page" v-else>
    <ThePreviews v-if="isElementHidden" class="preview" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import ThePreviews from '~/components/pages/main/ThePreviews.vue';
import UILoading from '~/components/UI/UILoading.vue';

import { hidePageElement } from '~/helpers/methods/route.methods';
import { useStackPageStore } from '~/stores/stack-page.store';

import { computed } from 'vue';

const isElementHidden = computed(() => hidePageElement());
const stackPageStore = useStackPageStore();
stackPageStore.getData();
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .stack-page {
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
  .stack-page {
    padding: 0;

    .preview {
      margin-top: 24px;
      margin-bottom: 24px;
      display: flex;
      align-self: center;
    }
  }
}

@media (min-width: 1400px) {
  .stack-page {
    padding-left: 24px;

    .preview {
      display: flex;
      align-self: center;
      margin-top: 24px;
    }
  }
}
</style>
