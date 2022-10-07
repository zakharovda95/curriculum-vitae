<template>
  <div>
    <UILoading v-if="mainStore.isLoading && !codeExamplesPageStore.data" />
    <div v-else class="code-examples-page">
      <ThePreviews v-if="isElementHidden" class="preview" />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThePreviews from '~/components/pages/main/ThePreviews.vue';
import UILoading from '~/components/UI/UILoading.vue';

import { hidePageElement } from '~/helpers/methods/route.methods';

import { useCodeExamplesPageStore } from '~/stores/code-examples-page.store';
import { useMainStore } from '~/stores/main.store';

import { computed, Ref, watch } from 'vue';
import { useHead } from '#imports';

useHead({
  title: 'Code',
});

const isElementHidden: Ref<boolean> = computed(() => hidePageElement());

const codeExamplesPageStore = useCodeExamplesPageStore();
const mainStore = useMainStore();

const lang: Ref<string> = computed(() => mainStore.lang);

watch(
  lang,
  () => {
    codeExamplesPageStore.getData(lang.value);
  },
  { deep: true, immediate: true },
);
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .code-examples-page {
    display: flex;
    height: 100%;
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
    display: flex;
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
      margin: 36px 24px;
    }
  }
}
</style>
