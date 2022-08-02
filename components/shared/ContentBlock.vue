<template>
  <div class="content-block">
    <slot name="content" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const blockHeight = computed(() => {
  const documentHeight = document.documentElement.offsetHeight;
});
</script>
