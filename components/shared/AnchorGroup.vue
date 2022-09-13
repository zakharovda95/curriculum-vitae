<template>
  <div class="anchor-group">
    <div class="header">
      {{ title }}
    </div>
    <div class="sections">
      <UIButton
        class="section"
        :class="{ 'active': activeAnchor === anchor.id }"
        @click="goToSection(anchor.id)"
        v-for="anchor in anchors"
        :key="anchor.name"
      >
        <span v-if="activeAnchor === anchor.id">&lt </span>
        <span class="text">{{ anchor.name }}</span>
        <span v-if="activeAnchor === anchor.id">&gt</span>
      </UIButton>
      <UIButton class="section" @click="goToChapter">На главную</UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIButton from '~/components/UI/UIButton.vue';

import { PageNameEnum } from '~/helpers/enums/page-name.enums';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';
import { AnchorsType } from '~/helpers/types/links.types';

import { PropType, ref, Ref } from 'vue';
import { RouteRecordName, useRoute, useRouter } from 'vue-router';

defineProps({
  anchors: {
    type: Array as PropType<AnchorsType>,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: () => 'Sections',
  },
});

const router = useRouter();
const route = useRoute();

const activeAnchor: Ref<RouteRecordName> = ref(route.name);

const goToSection = (anchorID: string): void => {
  router.push({ name: anchorID });
};

const goToChapter = (): void => {
  if (
    route.name === AnchorNamesEnum.personalInformation ||
    route.name === AnchorNamesEnum.objective ||
    route.name === AnchorNamesEnum.education ||
    route.name === AnchorNamesEnum.workExperience
  ) {
    router.push({ name: PageNameEnum.summary });
  }
  if (
    route.name === AnchorNamesEnum.mainStack ||
    route.name === AnchorNamesEnum.fullStack ||
    route.name === AnchorNamesEnum.softSkills
  ) {
    router.push({ name: PageNameEnum.stack });
  }
};
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 1399px) {
  .anchor-group {
    display: none;
  }
}

@media (min-width: 1400px) {
  .anchor-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background: $WHITE;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    height: 30vh;
    width: 14vw;
    color: $BLACK;
    border: 4px solid $GRAY;
    overflow: scroll;

    .header {
      margin-top: 12px;
      height: 15%;
      font-size: 1.3rem;
      font-weight: 400;
      color: $BLACK;
      border-bottom: 1px solid $GRAY;
    }

    .sections {
      padding: 12px;
      align-items: center;

      .section {
        display: flex;
        margin: 10px 0;
        padding: 0 5px;
        align-items: center;
        justify-content: center;

        .text {
          margin: 0 5px;
        }
      }
    }
  }

  .active {
    font-weight: 600;
  }
}
</style>
