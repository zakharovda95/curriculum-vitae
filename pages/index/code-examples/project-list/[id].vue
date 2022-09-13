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

import { useCodeExamplesPageStore } from '~/stores/code-examples.page.store';
import { definePageMeta } from '#imports';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import TheCarousel from '~/components/pages/code-examples/TheCarousel.vue';
import UIText from '~/components/UI/UIText.vue';
import SectionContainer from '~/components/pages/code-examples/SectionContainer.vue';

definePageMeta({
  layout: 'section',
});

const projectPageStore = useCodeExamplesPageStore();
const route = useRoute();

await projectPageStore.getProjectData(String(route.params.id));

const projectData = computed(() => projectPageStore.projectData);
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .project-page {
    width: 100%;
    background: $DARK_BLUE;

    .header {
      width: 100%;
      display: flex;
      justify-content: center;

      .title {
        font-family: Nunito-ExtraBold, sans-serif;
      }

      margin-bottom: 12px;
    }

    .carousel-container {
      margin-bottom: 24px;
      .carousel {
        margin: 0 auto;
        width: 95vw;
      }
    }
    .links {
      margin: 0 auto;
      width: 90vw;
      display: flex;
      justify-content: space-around;
      .link {
        color: whitesmoke;
        text-decoration: underline;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 1.2rem;
        display: flex;
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .project-page {
    width: 100%;
    background: $DARK_BLUE;

    .header {
      width: 100%;
      display: flex;
      justify-content: center;

      .title {
        margin-top: 24px;
        font-family: Nunito-ExtraBold, sans-serif;
      }

      margin-bottom: 24px;
    }

    .carousel-container {
      margin-bottom: 24px;
      .carousel {
        margin: 0 auto;
        width: 90vw;
      }
    }
    .links {
      margin: 0 auto;
      width: 60vw;
      display: flex;
      justify-content: space-around;
      .link {
        color: whitesmoke;
        text-decoration: underline;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 1.5rem;
        display: flex;
      }
    }
  }
}

@media (min-width: 1400px) {
  .project-page {
    width: 100%;
    background: $DARK_BLUE;

    .header {
      padding-top: 24px;
      margin-bottom: 24px;
      width: 100%;
      display: flex;
      justify-content: center;

      .title {
        font-family: Nunito-ExtraBold, sans-serif;
      }
    }

    .carousel-container {
      margin-bottom: 24px;
      .carousel {
        margin: 0 auto;
        width: 80vw;
      }
    }
    .links {
      margin: 0 auto;
      width: 30vw;
      display: flex;
      justify-content: space-around;
      .link {
        color: whitesmoke;
        text-decoration: underline;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 1.5rem;
        display: flex;
      }
    }
  }
}
</style>
