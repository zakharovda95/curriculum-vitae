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
const blockHeight = computed(() => `90vh - ${totalHeight.value}px`);
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .content-block {
    display: flex;
    flex-direction: column;
    width: calc(100% - 32px);
    min-height: calc(100vh - 142px);
    background: $BLACK;
    padding: 0 16px;
    font-size: 0.8rem;
    font-family: Nunito-SemiBold, sans-serif;
    color: $WHITE;

    .header {
      padding: 12px 0;
      border-bottom: 1px solid $GRAY;
      color: $GRAY;
      width: 100%;
      text-align: center;
      margin-bottom: 5px;
    }

    .content {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      width: 100%;
      min-height: 72vh;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .content-block {
    display: flex;
    flex-direction: column;
    width: 95%;
    min-height: calc(100vh - 142px);
    background: $BLACK;
    padding: 0 24px;
    font-size: 1.1rem;
    font-family: Nunito-SemiBold, sans-serif;
    color: $WHITE;

    .header {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid $GRAY;
      color: $GRAY;
      margin: 12px 0;
    }

    .content {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      width: 100%;
      min-height: 76vh;
    }
  }
}

@media (min-width: 1400px) {
  .content-block {
    display: flex;
    flex-direction: column;
    width: 70%;
    min-height: calc(100vh - 100px);
    background: $BLACK;
    padding: 0 24px;
    font-size: 1.2rem;
    font-family: Nunito-SemiBold, sans-serif;
    color: $WHITE;
    box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.3);
    border-right: 24px solid $GRAY;

    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid $GRAY;
      color: $GRAY;
      margin: 12px 0;
    }

    .content {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      width: 100%;
      min-height: 78vh;
      margin-bottom: 30px;
    }
  }
}
</style>
