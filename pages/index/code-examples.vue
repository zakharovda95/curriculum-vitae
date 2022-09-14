<template>
  <div class="code-examples-page">
    <div class="content">
      <ThePreviews v-if="isElementHidden" class="preview" />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThePreviews from '~/components/pages/main/ThePreviews.vue';

import { hidePageElement } from '~/helpers/methods/route.methods';
import { useCodeExamplesPageStore } from '~/stores/code-examples.page.store';

import { computed, Ref } from 'vue';

const isElementHidden: Ref<boolean> = computed(() => hidePageElement());

const codeExamplesPageStore = useCodeExamplesPageStore();

codeExamplesPageStore.getData();
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .code-examples-page {
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
  .code-examples-page {
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
  .code-examples-page {
    .preview {
      display: flex;
      align-self: center;
      margin-top: 24px;
      margin-left: 24px;
    }
  }
}
</style>
