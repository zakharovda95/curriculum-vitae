<template>
  <div class="section-container">
    <div class="header">
      <UIText size="2rem" class="section-title">{{ title }}</UIText>
    </div>
    <div class="content">
      <UIList v-slot="item" :list="content">
        <UIText class="row" size="1.5rem">
          {{ item }}
        </UIText>
      </UIList>
    </div>
  </div>
</template>
<script setup lang="ts">
import UIList from '~/components/UI/UIList.vue';
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
.section-container {
  width: 70vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .content {
    .section-title {
      text-align: center;
      margin-top: 24px;
      padding-top: 12px;
      font-family: Nunito-ExtraBold, sans-serif;
    }
    .row {
      margin-top: 12px;
    }
  }
}
</style>
