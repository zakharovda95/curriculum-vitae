<template>
  <div>
    <UILoading v-if="mainStore.isLoading" />
    <div v-else class="main-page">
      <TheHeader v-if="isElementHidden" id="header" />
      <TheNavigation v-if="isElementHidden" class="navbar" />
      <div class="pages">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavigation from '~/components/layouts/TheNavigation.vue';
import TheHeader from '~/components/pages/main/TheHeader.vue';
import UILoading from '~/components/UI/UILoading.vue';

import { hidePageElement } from '~/helpers/methods/route.methods';
import { useMainStore } from '~/stores/main.store';

import { definePageMeta } from '#imports';
import { computed, Ref } from 'vue';

definePageMeta({
  middleware: 'index-summary-redirect-middleware',
});

const isElementHidden: Ref<boolean> = computed(() => hidePageElement());

const mainStore = useMainStore();
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 799px) {
  .main-page {
    display: flex;
    flex-direction: column;

    .pages {
      width: 100%;
      height: auto;
    }
  }
}

@media (min-width: 800px) and (max-width: 1399px) {
  .main-page {
    display: flex;
    flex-direction: column;

    .pages {
      width: 100%;
      height: auto;
    }
  }
}
@media (min-width: 1400px) {
  .main-page {
    display: flex;
    flex-direction: column;

    .pages {
      width: 100%;
      height: calc(100vh - 682px);
    }
  }
}
</style>
