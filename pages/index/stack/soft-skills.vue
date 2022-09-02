<template>
  <UILoading v-if="stackPageStore.isLoading" />
  <div class="soft-skills" v-else>
    <AnchorGroup class="anchors" :anchors="anchors" title="Стек" />
    <ContentGenerator :content="pageContent" />
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors" />
  </div>
</template>

<script setup lang="ts">
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import ContentGenerator from '~/components/shared/ContentGenerator.vue';
import UILoading from '~/components/UI/UILoading.vue';

import { STACK_ANCHORS_RUS } from '~/helpers/services/links.services';
import { useStackPageStore } from '~/stores/stack-page.store';

import { AnchorsType } from '~/helpers/types/links.types';
import { SectionContentType } from '~/helpers/types/content/section-content.types';

import { computed, ref, Ref } from 'vue';
import { definePageMeta, useWindowWidthWatcher } from '#imports';

definePageMeta({
  layout: 'section',
});

const anchors: Ref<AnchorsType> = ref(STACK_ANCHORS_RUS);

const { widthX } = useWindowWidthWatcher();

const stackPageStore = useStackPageStore();
const pageContent: Ref<SectionContentType> = computed(() => {
  if (stackPageStore.data && !stackPageStore.isLoading) {
    return stackPageStore.data.softSkills;
  }
  return null;
});
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';
@media (max-width: 800px) {
  .soft-skills {
    background: $MAIN_AQUAMARINE;
    .anchors {
      display: none;
    }

    .section {
      display: flex;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .soft-skills {
    background: $MAIN_AQUAMARINE;
    .anchors {
      display: none;
    }

    .section {
    }
  }
}

@media (min-width: 1400px) {
  .soft-skills {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 7vw;
      text-decoration: none;
    }

    .section {
    }
  }
}
</style>
