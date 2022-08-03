<template>
  <div class="shift" @click="shiftTo">
    <slot name="button" />
  </div>
</template>

<script setup lang="ts">
const shiftTo = (): void => {
  const screen: HTMLElement = document.querySelector('#container');
  const screenHeight: number = screen.clientHeight;
  window.scrollTo({
    top: screenHeight + 12,
    left: 0,
    behavior: 'smooth',
  });
};
</script>
