<template>
  <div class="ui-icon">
    <img class="icon" :src="src" alt="icon" :style="style" />
  </div>
</template>

<script setup lang="ts">
import { StyleType } from '~/helpers/types/styles.types';

import { PropType } from 'vue';

defineProps({
  src: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<'16px' | '24px' | '32px' | '48px' | '72px' | '96px'>,
    required: false,
    default: () => '32px',
  },
  style: {
    type: Object as PropType<StyleType>,
    required: false,
    default: () => ({}),
  },
});
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
