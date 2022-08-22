<template>
  <div class="work-experience">
    <AnchorGroup class="anchors" :anchors="anchors" title="Резюме" />
    <ContentGenerator :content="WORK_EXPERIENCE_RUS" />
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors"></MobileNavigation>
  </div>
</template>

<script setup lang="ts">
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import ContentGenerator from '~/components/shared/ContentGenerator.vue';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';

import { SUMMARY_ANCHORS_RUS } from '~/helpers/services/links.services';
import { WORK_EXPERIENCE_RUS } from '~/helpers/content/summary/work-experience.content';

import { AnchorsType } from '~/helpers/types/links.types';

import { definePageMeta, useWindowWidthWatcher } from '#imports';
import { ref, Ref } from 'vue';

definePageMeta({
  layout: 'section',
});

const anchors: Ref<AnchorsType> = ref(SUMMARY_ANCHORS_RUS);

const { widthX } = useWindowWidthWatcher();
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .work-experience {
    .anchors {
      display: none;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .work-experience {
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
