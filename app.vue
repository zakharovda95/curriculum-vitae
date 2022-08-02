<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useScrollPreventer } from '~/composables/useScrollPreventer';

useScrollPreventer();
</script>
