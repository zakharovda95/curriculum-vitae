<template>
  <div class="project-list-item" @click="goToProjectPage">
    <UIText class="title">{{ projectData.title }}</UIText>
    <div class="container">
      <div class="text">{{ projectData.preview.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIText from '~/components/UI/UIText.vue';

import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';

import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  projectData: {
    type: Object,
    required: true,
  },
});

const background = computed(() => `url(${props.projectData.preview.image})`);

const router = useRouter();
const goToProjectPage = (): void => {
  router.push({ name: AnchorNamesEnum.projectPage, params: { id: props.projectData.id } });
};
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .project-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: item;
    cursor: pointer;
    margin-bottom: 24px;
    .title {
      font-family: Nunito-ExtraBold, sans-serif;
      font-size: 2rem;
    }
    .container {
      display: flex;
      justify-content: center;
      margin-top: 8px;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        v-bind(background);
      border: 3px solid $MAIN_AQUAMARINE;
      .text {
        display: flex;
        align-self: center;
        width: 70%;
        color: $MAIN_WHITE;
        text-align: center;
        font-size: 1.3rem;
      }
    }
    .container:hover {
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
        v-bind(background);
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .project-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: item;
    cursor: pointer;
    margin-bottom: 24px;
    .title {
      font-family: Nunito-ExtraBold, sans-serif;
      font-size: 2rem;
    }
    .container {
      display: flex;
      justify-content: center;
      margin-top: 8px;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        v-bind(background);
      border: 3px solid $MAIN_AQUAMARINE;
      .text {
        display: flex;
        align-self: center;
        width: 70%;
        color: $MAIN_WHITE;
        text-align: center;
        font-size: 1.3rem;
      }
    }
    .container:hover {
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
        v-bind(background);
    }
  }
}

@media (min-width: 1400px) {
  .project-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: item;
    cursor: pointer;
    margin-bottom: 24px;
    .title {
      font-family: Nunito-ExtraBold, sans-serif;
      font-size: 2rem;
    }
    .container {
      display: flex;
      justify-content: center;
      margin-top: 8px;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        v-bind(background);
      border: 3px solid $MAIN_AQUAMARINE;
      .text {
        display: flex;
        align-self: center;
        width: 70%;
        color: $MAIN_WHITE;
        text-align: center;
        font-size: 1.3rem;
      }
    }
    .container:hover {
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
        v-bind(background);
    }
  }
}
</style>
