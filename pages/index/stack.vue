<template>
  <div>
    <UILoading v-if="mainStore.isLoading && !stackPageStore.data" />
    <div v-else class="stack-page">
      <ThePreviews v-if="isElementHidden" class="preview" />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThePreviews from '~/components/pages/main/ThePreviews.vue';
import UILoading from '~/components/UI/UILoading.vue';

import { hidePageElement } from '~/helpers/methods/route.methods';

import { useStackPageStore } from '~/stores/stack-page.store';
import { useMainStore } from '~/stores/main.store';

import { computed, Ref, watch } from 'vue';
import { useHead } from '#imports';

useHead({
  title: 'Stack',
});

const isElementHidden: Ref<boolean> = computed(() => hidePageElement());

const stackPageStore = useStackPageStore();
const mainStore = useMainStore();

const lang: Ref<string> = computed(() => mainStore.lang);

watch(
  lang,
  () => {
    stackPageStore.getData(lang.value);
  },
  { deep: true, immediate: true },
);
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .stack-page {
    .preview {
      display: flex;
      align-self: center;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .stack-page {
    .preview {
      display: flex;
      align-self: center;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
}

@media (min-width: 1400px) {
  .stack-page {
    .preview {
      margin: 36px 24px;
    }
  }
}
</style>
