<template>
  <div class="shift" @click="shiftTo">
    <slot name="button" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const shiftTo = (): void => {
  window.scrollTo({
    top: document.documentElement.clientHeight,
    left: 0,
    behavior: 'smooth',
  });
};
</script>
