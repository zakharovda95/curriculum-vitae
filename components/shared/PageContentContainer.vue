<template>
  <div class="page-container" :id="name">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: false,
    default: () => '100vh',
  },
  justify: {
    type: String as PropType<'flex-start' | 'center' | 'flex-end'>,
    required: false,
    default: () => 'flex-end',
  },
});
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .page-container {
    display: flex;
    flex-direction: column;
    justify-content: v-bind(justify);
    width: 100%;
    margin-top: 24px;
  }
}

@media (min-width: 1700px) {
  .page-container {
    display: flex;
    flex-direction: column;
    justify-content: v-bind(justify);
    width: 100%;
    height: calc(v-bind(height));
    max-height: calc(v-bind(height));
    min-height: calc(v-bind(height));
  }
}
</style>
