<template>
  <div class="education">
    <AnchorGroup class="anchors" :anchors="anchors" title="Резюме" />
    <ContentGenerator :content="EDUCATION_RUS" />
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors"></MobileNavigation>
  </div>
</template>

<script setup lang="ts">
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import ContentGenerator from '~/components/shared/ContentGenerator.vue';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';

import { SUMMARY_ANCHORS_RUS } from '~/helpers/services/links.services';
import { EDUCATION_RUS } from '~/helpers/content/summary/education.content';

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
  .education {
    .anchors {
      display: none;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .education {
    .anchors {
      display: none;
    }
  }
}

@media (min-width: 1400px) {
  .education {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 7vw;
      text-decoration: none;
    }
  }
}
</style>
