<template>
  <div class="loading" v-if="summaryPageStore.isLoading">loading</div>
  <div class="personal-information" v-else>
    {{ pageContent }}
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

import { computed, ref, Ref } from 'vue';
import { definePageMeta, useWindowWidthWatcher } from '#imports';
import { useSummaryPageStore } from '~/stores/summary-page.store';

definePageMeta({
  layout: 'section',
});

const anchors: Ref<AnchorsType> = ref(SUMMARY_ANCHORS_RUS);

const { widthX } = useWindowWidthWatcher();

const summaryPageStore = useSummaryPageStore();
const pageContent = computed(() => {
  if (summaryPageStore.data) {
    console.log(summaryPageStore.data);
    return summaryPageStore.data;
  }
  return null;
});
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .personal-information {
    .anchors {
      display: none;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .personal-information {
    .anchors {
      display: none;
    }
  }
}

@media (min-width: 1400px) {
  .personal-information {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 7vw;
      text-decoration: none;
    }
  }
}
</style>
