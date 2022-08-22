<template>
  <div class="soft-skills">
    <AnchorGroup class="anchors" :anchors="anchors" title="Стек" />
    <ContentGenerator :content="SOFT_SKILLS_RUS" />
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors"></MobileNavigation>
  </div>
</template>

<script setup lang="ts">
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import ContentGenerator from '~/components/shared/ContentGenerator.vue';

import { STACK_ANCHORS_RUS } from '~/helpers/services/links.services';
import { SOFT_SKILLS_RUS } from '~/helpers/content/stack/soft-skills.content';

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
  .soft-skills {
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
