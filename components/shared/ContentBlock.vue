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
import { useCalculateDOMElementsHeight } from '~/composables/useCalculateDOMElementsHeight';
import { computed, Ref } from 'vue';

const height: Ref<number> = useCalculateDOMElementsHeight(['#top', '#navbar']);
const totalHeight: Ref<string> = computed(() => `95vh - ${height.value}px`);
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .content-block {
    width: calc(95% - 10px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: $MAIN_BLACK;
    padding: 12px;
    font-size: 0.8rem;
    font-family: Nunito-SemiBold, sans-serif;
    color: $MAIN_WHITE;
    border-right: 5px solid $MAIN_AQUAMARINE;

    .header {
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      border-bottom: 1px solid $MAIN_AQUAMARINE;
      color: $MAIN_AQUAMARINE;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: baseline;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .content-block {
    width: calc(95% - 10px);
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
      flex-direction: column;
      justify-content: space-around;
      align-items: baseline;
    }
  }
}

@media (min-width: 1400px) {
  .content-block {
    width: 70%;
    height: calc(v-bind(totalHeight));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
      height: 10%;
      width: 100%;
      border-bottom: 1px solid $MAIN_AQUAMARINE;
      color: $MAIN_AQUAMARINE;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: baseline;
      height: 85%;
      width: 100%;
      overflow: scroll;
    }
  }
}
</style>
