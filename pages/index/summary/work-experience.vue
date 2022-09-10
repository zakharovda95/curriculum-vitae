<template>
  <div class="work-experience">
    <AnchorGroup class="anchors" :anchors="anchors" title="Резюме" />
    <ContentGenerator :content="pageContent" />
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors" />
  </div>
</template>

<script setup lang="ts">
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import ContentGenerator from '~/components/shared/ContentGenerator.vue';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';

import { SUMMARY_ANCHORS_RUS } from '~/helpers/services/links.services';

import { AnchorsType } from '~/helpers/types/links.types';
import { SectionContentType } from '~/helpers/types/content/section-content.types';

import { definePageMeta, useWindowWidthWatcher } from '#imports';
import { computed, ref, Ref } from 'vue';
import { useSummaryPageStore } from '~/stores/summary-page.store';

definePageMeta({
  layout: 'section',
});

const anchors: Ref<AnchorsType> = ref(SUMMARY_ANCHORS_RUS);

const { widthX } = useWindowWidthWatcher();

const summaryPageStore = useSummaryPageStore();
const pageContent: Ref<SectionContentType> = computed(() => {
  if (summaryPageStore.data && !summaryPageStore.isLoading) {
    return summaryPageStore.data.workExperience;
  }
  return null;
});
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .work-experience {
    background: $MAIN_AQUAMARINE;
    .anchors {
      display: none;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .work-experience {
    background: $MAIN_AQUAMARINE;
    .anchors {
      display: none;
    }
  }
}

@media (min-width: 1400px) {
  .work-experience {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 7vw;
      text-decoration: none;
    }
  }
}
</style>
