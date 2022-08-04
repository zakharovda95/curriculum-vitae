<template>
  <component class="ui-paragraph" :is="tag">
    <span class="title" v-if="title">{{ title }}: </span>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  tag: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'p'>,
    required: false,
    default: () => 'h2',
  },
  title: {
    type: String,
    required: false,
    default: () => '',
  },
});
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

.ui-paragraph {
  color: whitesmoke;

  .title {
    color: $MAIN_AQUAMARINE;
  }
}
</style>
