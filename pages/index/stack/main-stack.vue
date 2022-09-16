<template>
  <div class="main-stack">
    <AnchorGroup class="anchors" :anchors="anchors" title="Стек" />
    <ContentGenerator :content="pageContent" />
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors" />
  </div>
</template>

<script setup lang="ts">
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import ContentGenerator from '~/components/shared/ContentGenerator.vue';

import { links } from '~/helpers/services/links.service';
import { useStackPageStore } from '~/stores/stack-page.store';
import { useMainStore } from '~/stores/main.store';

import { AnchorsType } from '~/helpers/types/links.types';
import { SectionContentType } from '~/helpers/types/content.types';

import { computed, Ref } from 'vue';
import { definePageMeta, useWindowWidthWatcher } from '#imports';

definePageMeta({
  layout: 'section',
});

const { widthX } = useWindowWidthWatcher();

const stackPageStore = useStackPageStore();
const mainStore = useMainStore();

const lang: Ref<string> = computed(() => mainStore.lang);

const anchors: Ref<AnchorsType> = computed(() => links.getStackAnchors(lang.value));

const pageContent: Ref<SectionContentType> | Ref<null> = computed(() => {
  if (stackPageStore.data) {
    return stackPageStore.data.mainStack;
  }
  return null;
});
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';
@media (max-width: 800px) {
  .main-stack {
    background: $GRAY;
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
    background: $GRAY;
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
