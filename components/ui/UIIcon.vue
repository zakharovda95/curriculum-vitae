<template>
  <div class="ui-icon">
    <img class="icon" :src="src" alt="icon" :style="style">
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";

defineProps({
  src: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<'16px' | '24px' | '32px' | '48px' | '56px'| '72px' | '144px' | '192px'>,
    required: false,
    default: () => '32px'
  },
  style: {
    type: Object as PropType<{ [key: string]: string | number }>,
    required: false,
    default: () => ({})
  }
})
</script>

<style scoped lang="scss">
.ui-icon {
  display: flex;
  align-self: center;
  justify-content: center;

  img {
    width: v-bind(size);
    height: v-bind(size);
  }
}
</style>