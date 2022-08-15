<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { pageLifeCycleScrollBehavior } from '~/helpers/methods/scroll.methods';

pageLifeCycleScrollBehavior('page:start');
pageLifeCycleScrollBehavior('page:finish');
</script>
