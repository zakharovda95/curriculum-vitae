<template>
  <UILoading v-if="stackPageStore.isLoading" />
  <div class="full-stack" v-else>
    <AnchorGroup class="anchors" :anchors="anchors" title="Стек" />
    <ContentBlock class="section">
      <template #header>
        <h1>{{ pageContent.title }}</h1>
      </template>
      <template #content>
        <UIList class="stack-list" v-slot="item: StackListItemType" :list="pageContent.content">
          <StackListItem :stack-list-item="item" />
        </UIList>
      </template>
    </ContentBlock>
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors" />
  </div>
</template>

<script setup lang="ts">
import ContentBlock from '~/components/shared/ContentBlock.vue';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import UIList from '~/components/UI/UIList.vue';
import StackListItem from '~/components/pages/stack/StackListItem.vue';
import UILoading from '~/components/UI/UILoading.vue';

import { STACK_ANCHORS_RUS } from '~/helpers/services/links.services';
import { useStackPageStore } from '~/stores/stack-page.store';

import { AnchorsType } from '~/helpers/types/links.types';
import { StackListItemType } from '~/helpers/types/content/stack-list-item.types';
import { FullStackType } from '~/helpers/types/content/section-content.types';

import { computed, ref, Ref } from 'vue';
import { definePageMeta, useWindowWidthWatcher } from '#imports';

definePageMeta({
  layout: 'section',
});

const anchors: Ref<AnchorsType> = ref(STACK_ANCHORS_RUS);

const { widthX } = useWindowWidthWatcher();

const stackPageStore = useStackPageStore();
const pageContent: Ref<FullStackType> = computed(() => {
  if (stackPageStore.data && !stackPageStore.isLoading) {
    return stackPageStore.data.fullStack;
  }
  return null;
});
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .full-stack {
    .anchors {
      display: none;
    }

    .section {
      display: flex;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .full-stack {
    .anchors {
      display: none;
    }

    .section {
    }
  }
}

@media (min-width: 1400px) {
  .full-stack {
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
