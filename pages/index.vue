<template>
  <div class="main-page">
    <TheHeader v-if="isElementHidden" id="header" />
    <TheNavigation v-if="isElementHidden" class="navbar" />
    <div class="pages">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavigation from '~/components/layouts/TheNavigation.vue';
import TheHeader from '~/components/pages/main/TheHeader.vue';

import { hidePageElement } from '~/helpers/methods/route.methods';

import { definePageMeta } from '#imports';
import { computed, Ref } from 'vue';

definePageMeta({
  middleware: 'index-summary-redirect-middleware',
});

const isElementHidden: Ref<boolean> = computed(() => hidePageElement());
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

.main-page {
  display: flex;
  flex-direction: column;

  .pages {
    width: 100%;
  }
}
</style>
