<template>
  <div class="section-container">
    <UIText size="2rem" class="section-title">{{ title }}</UIText>
    <UIText v-for="item in content" :key="item" class="row" size="1.5rem">
      {{ item }}
    </UIText>
  </div>
</template>
<script setup lang="ts">
import UIText from '~/components/UI/UIText.vue';
defineProps({
  title: {
    type: String,
    required: false,
    default: () => '',
  },
  content: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .section-container {
    display: flex;
    flex-direction: column;
    width: 95vw;
    margin: 0 auto;
    .section-title {
      text-align: center;
      margin-top: 24px;
      padding-top: 12px;
      font-family: Nunito-ExtraBold, sans-serif;
    }
  }
  .row {
    margin-top: 12px;
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .section-container {
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
    .section-title {
      text-align: center;
      margin-top: 24px;
      padding-top: 12px;
      font-family: Nunito-ExtraBold, sans-serif;
    }
  }
  .row {
    margin-top: 12px;
  }
}

@media (min-width: 1400px) {
  .section-container {
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: 0 auto;
    padding: 24px 0;
    .section-title {
      text-align: center;
      margin-top: 24px;
      padding-top: 12px;
      font-family: Nunito-ExtraBold, sans-serif;
    }
  }
  .row {
    margin-top: 12px;
  }
}
</style>
