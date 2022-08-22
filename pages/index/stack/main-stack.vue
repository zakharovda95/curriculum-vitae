<template>
  <div class="main-stack">
    <AnchorGroup class="anchors" :anchors="anchors" title="Стек" />
    <ContentGenerator :content="MAIN_STACK_RUS" />
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors"></MobileNavigation>
  </div>
</template>

<script setup lang="ts">
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import ContentGenerator from '~/components/shared/ContentGenerator.vue';

import { STACK_ANCHORS_RUS } from '~/helpers/services/links.services';
import { MAIN_STACK_RUS } from '~/helpers/content/stack/main-stack.content';

import { AnchorsType } from '~/helpers/types/links.types';

import { ref, Ref } from 'vue';
import { definePageMeta, useWindowWidthWatcher } from '#imports';

definePageMeta({
  layout: 'section',
});

const anchors: Ref<AnchorsType> = ref(STACK_ANCHORS_RUS);

const { widthX } = useWindowWidthWatcher();
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
