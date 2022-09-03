<template>
  <div class="project-list-item">
    <UIText class="title">{{ projectData.title }}</UIText>
    <div class="container" />
  </div>
</template>

<script setup lang="ts">
import UIText from '~/components/UI/UIText.vue';

const props = defineProps({
  projectData: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .project-list-item {
    width: 100%;
    min-height: 90vh;
    background: $MAIN_BANNER;
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .project-list-item {
    width: 100%;
    height: 90vh;
    background: $MAIN_BANNER;
  }
}

@media (min-width: 1400px) {
  .project-list-item {
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: item;
    .title {
      font-family: Nunito-ExtraBold, sans-serif;
      font-size: 2rem;
    }
    .container {
      margin-top: 8px;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      background: white;
    }
  }
}
</style>
