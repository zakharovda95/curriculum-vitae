<template>
  <div class="ui-list">
    <div v-for="item in list" :key="item">
      <slot v-bind="item" />
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
  direction: {
    type: String as PropType<'column' | 'row'>,
    required: false,
    default: () => 'column',
  },
  justify: {
    type: String as PropType<
      'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between'
    >,
    required: false,
    default: () => 'center',
  },
});
</script>

<style scoped lang="scss">
.ui-list {
  width: 100%;
  display: flex;
  justify-content: v-bind(justify);
  flex-direction: v-bind(direction);
}
</style>
