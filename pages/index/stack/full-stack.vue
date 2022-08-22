<template>
  <div class="full-stack">
    <AnchorGroup class="anchors" :anchors="anchors" title="Стек" />
    <ContentBlock class="section">
      <template #header>
        <h1>Полный Стек</h1>
      </template>
      <template #content>
        <UIList class="stack-list" v-slot="item: StackListItemType" :list="stackList">
          <StackListItem :stack-list-item="item" />
        </UIList>
      </template>
    </ContentBlock>
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors"></MobileNavigation>
  </div>
</template>

<script setup lang="ts">
import ContentBlock from '~/components/shared/ContentBlock.vue';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import UIList from '~/components/UI/UIList.vue';
import StackListItem from '~/components/pages/stack/StackListItem.vue';

import { STACK_LIST_RUS } from '~/helpers/content/stack/stack-list.content';
import { STACK_ANCHORS_RUS } from '~/helpers/services/links.services';

import { AnchorsType } from '~/helpers/types/links.types';
import { StackListItemType } from '~/helpers/types/content/stack-list-item.types';

import { ref, Ref } from 'vue';
import { definePageMeta, useWindowWidthWatcher } from '#imports';
import { useRouter } from 'vue-router';

definePageMeta({
  layout: 'section',
});

const router = useRouter();

const anchors: Ref<AnchorsType> = ref(STACK_ANCHORS_RUS);
const stackList: Ref<StackListItemType[]> = ref(STACK_LIST_RUS);

const { widthX } = useWindowWidthWatcher();
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
