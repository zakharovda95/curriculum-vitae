<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useScrollPreventer } from '~/composables/useScrollPreventer';
import { useNuxtApp } from '#app';

// useScrollPreventer();

const nuxtApp = useNuxtApp();

nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0);
});

nuxtApp.hook('page:start', () => {
  window.scrollTo(0, 0);
});
</script>
