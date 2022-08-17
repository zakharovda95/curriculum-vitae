<template>
  <div class="stack-list-item">
    <div class="icon">
      <UIIcon :src="stackListItem.icon" size="56px" />
    </div>
    <div class="name">
      <UIText size="1.5rem">{{ stackListItem.name }}</UIText>
    </div>
    <div class="description">
      <UIText size="0.9rem">{{ stackListItem.description }}</UIText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import UIIcon from '~/components/UI/UIIcon.vue';
import UIText from '~/components/UI/UIText.vue';
import { StackListItemType } from '~/helpers/types/stack-list-item.types';

defineProps({
  stackListItem: {
    type: Object as PropType<StackListItemType>,
    required: true,
  },
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
