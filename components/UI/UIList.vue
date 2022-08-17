<template>
  <div class="ui-list">
    <div class="list">
      <div v-for="item in list" :key="item">
        <slot v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  list: {
    type: Array,
    required: true,
  },
  justify: {
    type: String as PropType<'flex-start' | 'center' | 'flex-end'>,
    required: false,
    default: () => 'center',
  },
  direction: {
    type: String as PropType<'column' | 'row'>,
    required: false,
    default: () => 'column',
  },
});
</script>

<style scoped lang="scss">
.ui-list {
  display: flex;
  justify-content: v-bind(justify);
  flex-direction: v-bind(direction);
}
</style>
