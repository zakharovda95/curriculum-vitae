<template>
  <div class="objective">
    <AnchorGroup class="anchors" :anchors="anchors" title="Резюме" />
    <ContentGenerator :content="OBJECTIVE_RUS" />
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors" />
  </div>
</template>

<script setup lang="ts">
import ContentGenerator from '~/components/shared/ContentGenerator.vue';
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';

import { OBJECTIVE_RUS } from '~/helpers/content/summary/objective.content';
import { SUMMARY_ANCHORS_RUS } from '~/helpers/services/links.services';

import { AnchorsType } from '~/helpers/types/links.types';

import { ref, Ref } from 'vue';
import { definePageMeta, useWindowWidthWatcher } from '#imports';

definePageMeta({
  layout: 'section',
});

const anchors: Ref<AnchorsType> = ref(SUMMARY_ANCHORS_RUS);
const { widthX } = useWindowWidthWatcher();
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .objective {
    .anchors {
      display: none;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .objective {
    .anchors {
      display: none;
    }
  }
}

@media (min-width: 1400px) {
  .objective {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 7vw;
      text-decoration: none;
    }
  }
}
</style>
