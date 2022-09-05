<template>
  <UILoading v-if="codeExamplesPageStore.isLoading" />
  <div v-else class="project-list-page">
    <div class="wrapper">
      <ProjectListItem
        v-for="project in projects"
        :key="project.id"
        class="project"
        :project-data="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectListItem from '~/components/pages/code-examples/ProjectListItem.vue';
import UILoading from '~/components/UI/UILoading.vue';

import { useCodeExamplesPageStore } from '~/stores/code-examples.page.store';

import { definePageMeta } from '#imports';
import { computed } from 'vue';

definePageMeta({
  layout: 'section',
});

const codeExamplesPageStore = useCodeExamplesPageStore();
const projects = computed(() => {
  if (codeExamplesPageStore.data && !codeExamplesPageStore.isLoading) {
    return codeExamplesPageStore.data;
  }
  return null;
});
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .project-list-page {
    width: 100%;
    min-height: 90vh;
    background: $MAIN_BANNER;
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .project-list-page {
    width: 100%;
    height: 90vh;
    background: $MAIN_BANNER;
  }
}

@media (min-width: 1400px) {
  .project-list-page {
    width: 100%;
    min-height: 90vh;
    background: $MAIN_BANNER;
    .wrapper {
      width: 70%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 12px;
      .project {
        width: 500px;
        height: 400px;
      }
    }
  }
}
</style>
