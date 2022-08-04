<template>
  <div class="shift" @click="start">
    <slot name="button" />
  </div>
</template>

<script setup lang="ts">
const start = (): void => {
  const screen: HTMLElement = document.querySelector('#personal-information');
  const screenHeight = screen.offsetHeight;
  window.scrollBy({
    top: screenHeight - 16,
    left: 0,
    behavior: 'smooth',
  });
};
</script>
