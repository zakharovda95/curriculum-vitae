<template>
  <div class="anchor-group">
    <div class="header">
      {{ title }}
    </div>
    <div class="sections">
      <UIList v-slot="item: AnchorType" :list="anchors">
        <UIButton
          class="section"
          :class="{ 'active': activeAnchor === item.id }"
          @click="goToSection(item.id)"
        >
          <span v-if="activeAnchor === item.id">&lt</span>
          <span class="text">{{ item.name }}</span>
          <span v-if="activeAnchor === item.id">&gt</span>
        </UIButton>
      </UIList>
      <UIButton class="section" @click="goToChapter">{{ buttonName }}</UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIButton from '~/components/UI/UIButton.vue';
import UIList from '~/components/UI/UIList.vue';

import { useMainStore } from '~/stores/main.store';

import { PageNameEnum } from '~/helpers/enums/page-name.enums';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';
import { AnchorsType, AnchorType } from '~/helpers/types/links.types';

import { computed, PropType, ref, Ref } from 'vue';
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

const mainStore = useMainStore();

const lang: Ref<string> = computed(() => mainStore.lang);

const buttonName: Ref<string> = computed(() => (lang.value === 'rus' ? 'Главная' : 'Home Page'));

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
    height: 30vh;
    width: 14vw;
    margin: 0 auto;
    background: $WHITE;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    color: $BLACK;
    border: 4px solid $GRAY;
    overflow: scroll;

    .header {
      height: 15%;
      margin-top: 12px;
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
        align-items: center;
        justify-content: center;
        margin: 10px 0;
        padding: 0 5px;

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
