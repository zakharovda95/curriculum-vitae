<template>
  <UILoading v-if="stackPageStore.isLoading" />
  <div class="main-stack" v-else>
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
    return stackPageStore.data.mainStack;
  }
  return null;
});
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .main-stack {
    .anchors {
      display: none;
    }

    .section {
      display: flex;

      .to-full-stack {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .main-stack {
    .anchors {
      display: none;
    }

    .section {
      .to-full-stack {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 1400px) {
  .main-stack {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 7vw;
      text-decoration: none;
    }

    .section {
      .to-full-stack {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
