<template>
  <UILoading v-if="projectPageStore.isLoading" />
  <div v-if="!projectPageStore.isLoading" class="project-page">
    <div class="header">
      <UIText size="2.2rem" class="title">{{ projectData.title }}</UIText>
    </div>
    <div class="carousel-container">
      <TheCarousel class="carousel" :slides="projectData.images" />
    </div>
    <div class="links">
      <NuxtLink target="_blank" class="link" :to="projectData.links.github">GIT HUB</NuxtLink>
      <NuxtLink target="_blank" class="link" :to="projectData.links.site">DEMO VIEW</NuxtLink>
    </div>
    <div class="description">
      <SectionContainer :content="projectData.description" title="Описание" />
    </div>
    <div class="stack">
      <SectionContainer :content="projectData.stack" title="Стек" />
    </div>
  </div>
</template>

<script setup lang="ts">
import UILoading from '~/components/UI/UILoading.vue';
import TheCarousel from '~/components/pages/code-examples/TheCarousel.vue';
import UIText from '~/components/UI/UIText.vue';
import SectionContainer from '~/components/pages/code-examples/SectionContainer.vue';

import { useCodeExamplesPageStore } from '~/stores/code-examples.page.store';
import { CodeExamplesProjectType } from '~/helpers/types/content.types';

import { definePageMeta } from '#imports';
import { useRoute } from 'vue-router';
import { computed, Ref } from 'vue';

definePageMeta({
  layout: 'section',
});

const projectPageStore = useCodeExamplesPageStore();
const route = useRoute();

await projectPageStore.getProjectData(String(route.params.id));

const projectData: Ref<CodeExamplesProjectType> = computed(() => projectPageStore.projectData);
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .project-page {
    width: 100%;
    background: $DARK_BLUE;

    .header {
      display: flex;
      justify-content: center;
      width: 100%;

      .title {
        font-family: Nunito-ExtraBold, sans-serif;
      }

      margin-bottom: 12px;
    }

    .carousel-container {
      margin-bottom: 24px;
      .carousel {
        width: 95vw;
        margin: 0 auto;
      }
    }
    .links {
      display: flex;
      justify-content: space-around;
      width: 90vw;
      margin: 0 auto;
      .link {
        display: flex;
        color: whitesmoke;
        text-decoration: underline;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 1.2rem;
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .project-page {
    width: 100%;
    background: $DARK_BLUE;

    .header {
      display: flex;
      justify-content: center;
      width: 100%;

      .title {
        margin-top: 24px;
        font-family: Nunito-ExtraBold, sans-serif;
      }

      margin-bottom: 24px;
    }

    .carousel-container {
      margin-bottom: 24px;
      .carousel {
        width: 90vw;
        margin: 0 auto;
      }
    }
    .links {
      display: flex;
      justify-content: space-around;
      width: 60vw;
      margin: 0 auto;
      .link {
        display: flex;
        color: whitesmoke;
        text-decoration: underline;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 1.5rem;
      }
    }
  }
}

@media (min-width: 1400px) {
  .project-page {
    width: 100%;
    background: $DARK_BLUE;

    .header {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-top: 24px;
      margin-bottom: 24px;

      .title {
        font-family: Nunito-ExtraBold, sans-serif;
      }
    }

    .carousel-container {
      margin-bottom: 24px;
      .carousel {
        width: 80vw;
        margin: 0 auto;
      }
    }
    .links {
      display: flex;
      justify-content: space-around;
      width: 30vw;
      margin: 0 auto;
      .link {
        display: flex;
        color: whitesmoke;
        text-decoration: underline;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
