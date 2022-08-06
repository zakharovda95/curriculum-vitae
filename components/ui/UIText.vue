<template>
  <span class="ui-text">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed, PropType, Ref } from 'vue';

const props = defineProps({
  size: {
    type: String,
    required: false,
    default: () => '1rem',
  },
  color: {
    type: String,
    required: false,
    default: () => 'whitesmoke',
  },
  weight: {
    type: String as PropType<'normal' | '600' | 'bold'>,
    required: false,
    default: () => 'normal',
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    required: false,
    default: () => 'left',
  },
  underline: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

const decoration: Ref<string> = computed(() => (props.underline ? 'underline' : 'none'));
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

.ui-text {
  color: v-bind(color);
  font-size: v-bind(size);
  font-weight: v-bind(weight);
  text-align: v-bind(align);
  text-decoration: v-bind(decoration);
}
</style>
