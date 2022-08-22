<template>
  <div class="stack-list-item">
    <div class="icon">
      <UIIcon :src="stackListItem.icon" :size="imgSizes" />
    </div>
    <div class="name">
      <UIText :size="fontSizes">{{ stackListItem.name }}</UIText>
    </div>
    <div class="description">
      <UIText size="0.9rem">{{ stackListItem.description }}</UIText>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIIcon from '~/components/UI/UIIcon.vue';
import UIText from '~/components/UI/UIText.vue';

import { StackListItemType } from '~/helpers/types/content/stack-list-item.types';
import { useWindowWidthWatcher } from '~/composables/useWindowWidthWatcher';

import { computed, PropType } from 'vue';

defineProps({
  stackListItem: {
    type: Object as PropType<StackListItemType>,
    required: true,
  },
});

const { widthX } = useWindowWidthWatcher();

const fontSizes = computed(() => {
  if (widthX.value < 800) {
    return '1rem';
  } else if (widthX.value > 800 && widthX.value < 1400) {
    return '1.3rem';
  } else {
    return '1.5rem';
  }
});

const imgSizes = computed(() => {
  if (widthX.value < 800) {
    return '48px';
  } else {
    return '56px';
  }
});
</script>

<style scoped lang="scss">
@import '../../../assets/css/_constants.scss';

@media (max-width: 800px) {
  .stack-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $MAIN_AQUAMARINE;
    padding: 5px;

    .icon {
      display: flex;
      align-items: center;
      align-self: center;
      width: 10%;
      margin-right: 8px;
    }

    .name {
      display: flex;
      align-items: center;
      align-self: center;
      width: 20%;
    }

    .description {
      display: flex;
      align-items: center;
      align-self: center;
      width: 55%;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .stack-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $MAIN_AQUAMARINE;
    padding: 5px;

    .icon {
      display: flex;
      align-items: center;
      align-self: center;
      width: 10%;
    }

    .name {
      display: flex;
      align-items: center;
      align-self: center;
      width: 20%;
    }

    .description {
      display: flex;
      align-items: center;
      align-self: center;
      width: 65%;
    }
  }
}

@media (min-width: 1400px) {
  .stack-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid $MAIN_AQUAMARINE;
    padding: 5px;

    v .icon {
      display: flex;
      align-items: center;
      align-self: center;
      width: 10%;
    }

    .name {
      display: flex;
      align-items: center;
      align-self: center;
      width: 20%;
    }

    .description {
      display: flex;
      align-items: center;
      align-self: center;
      width: 65%;
    }
  }
}
</style>
