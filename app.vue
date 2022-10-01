<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useSummaryPageStore } from '~/stores/summary-page.store';

const store = useSummaryPageStore();

await store.getData();
</script>

<style>
.container {
  height: 100%;
  width: 100%;
}
</style>
