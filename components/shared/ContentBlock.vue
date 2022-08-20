<template>
  <div class="content-block">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCalculateDOMElementsHeight } from '~/composables/useCalculateDOMElementsHeigth';
import { computed } from 'vue';

const totalHeight = useCalculateDOMElementsHeight(['#navbar', '#top']);
const blockHeight = computed(() => `95vh - ${totalHeight.value}px`);
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .content-block {
    width: calc(90% - 10px);
    min-height: calc(v-bind(blockHeight));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: $MAIN_BLACK;
    padding: 16px;
    font-size: 0.8rem;
    font-family: Nunito-SemiBold, sans-serif;
    color: $MAIN_WHITE;
    border-right: 8px solid $MAIN_AQUAMARINE;

    .header {
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      border-bottom: 1px solid $MAIN_AQUAMARINE;
      color: $MAIN_AQUAMARINE;
    }

    .content {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      width: 100%;
      min-height: 70vh;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .content-block {
    width: calc(97% - 10px);
    min-height: calc(v-bind(blockHeight));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: $MAIN_BLACK;
    padding: 12px;
    font-size: 1.1rem;
    font-family: Nunito-SemiBold, sans-serif;
    color: $MAIN_WHITE;
    border-right: 10px solid $MAIN_AQUAMARINE;

    .header {
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      border-bottom: 1px solid $MAIN_AQUAMARINE;
      color: $MAIN_AQUAMARINE;
    }

    .content {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      width: 100%;
      min-height: 79vh;
    }
  }
}

@media (min-width: 1400px) {
  .content-block {
    width: 70%;
    min-height: calc(v-bind(blockHeight));
    display: flex;
    flex-direction: column;
    background: $MAIN_BLACK;
    padding: 24px;
    font-size: 1.2rem;
    font-family: Nunito-SemiBold, sans-serif;
    color: $MAIN_WHITE;
    box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.3);
    border-right: 15px solid $MAIN_AQUAMARINE;

    .header {
      flex-direction: column;
      justify-content: center;
      height: 15%;
      width: 100%;
      border-bottom: 1px solid $MAIN_AQUAMARINE;
      color: $MAIN_AQUAMARINE;
    }

    .content {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      width: 100%;
      min-height: 79vh;
    }
  }
}
</style>
