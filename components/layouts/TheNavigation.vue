<template>
  <div class="the-navigation" id="navbar">
    <div class="link-group">
      <UIList v-slot="item" :list="navigationLinks" direction="row" justify="space-around">
        <NuxtLink class="link" :to="item.path" :class="{ 'active': isLinkActive(item.path.name) }">
          <span v-if="isLinkActive(item.path.name)">&lt </span>
          <span>{{ item.name }}</span>
          <span v-if="isLinkActive(item.path.name)"> /&gt</span>
        </NuxtLink>
      </UIList>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIList from '~/components/UI/UIList.vue';

import { links } from '~/helpers/services/links.service';

import { useMainStore } from '~/stores/main.store';
import { PageNameEnum } from '~/helpers/enums/page-name.enums';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';
import { NavigationLinksType } from '~/helpers/types/links.types';

import { useRoute } from 'vue-router';
import { computed, PropType, Ref } from 'vue';

const props = defineProps({
  page: {
    type: String as PropType<'main' | 'other'>,
    required: false,
    default: () => 'main',
  },
});

const mainStore = useMainStore();

const lang: Ref<string> = computed(() => mainStore.lang);

const route = useRoute();

const navigationLinks: Ref<NavigationLinksType> = computed(() =>
  links.getNavigationLinks(lang.value, props.page),
);

const isLinkActive = (linkName: PageNameEnum | AnchorNamesEnum): boolean => {
  return (
    route.name === linkName ||
    (linkName === AnchorNamesEnum.personalInformation &&
      route.name === AnchorNamesEnum.objective) ||
    (linkName === AnchorNamesEnum.personalInformation &&
      route.name === AnchorNamesEnum.education) ||
    (linkName === AnchorNamesEnum.personalInformation &&
      route.name === AnchorNamesEnum.workExperience) ||
    (linkName === AnchorNamesEnum.mainStack && route.name === AnchorNamesEnum.fullStack) ||
    (linkName === AnchorNamesEnum.mainStack && route.name === AnchorNamesEnum.softSkills) ||
    (linkName === AnchorNamesEnum.projectList && route.name === AnchorNamesEnum.projectPage)
  );
};
</script>

<style scoped lang="scss">
@import '../../assets/css/_constants.scss';
@import '../../assets/css/hoverable.css';

@media (max-width: 800px) {
  .the-navigation {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background: $GRAY;
    z-index: 3;
    position: static;
    margin-top: 0;

    .link-group {
      display: flex;
      width: 100%;

      .link {
        display: flex;
        text-decoration: none;
        text-align: center;
        font-weight: 500;
        font-size: 1rem;
        color: $BLACK;
        font-family: Nunito-SemiBold, sans-serif;
        padding-right: 8px;
        padding-left: 8px;
      }

      .active {
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .the-navigation {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background: $GRAY;
    z-index: 3;
    position: static;
    margin-top: 0;

    .link-group {
      display: flex;
      width: 100%;

      .link {
        display: flex;
        text-decoration: none;
        text-align: center;
        font-weight: 500;
        font-size: 1.3rem;
        color: $BLACK;
        font-family: Nunito-SemiBold, sans-serif;
        padding-right: 8px;
        padding-left: 8px;
      }

      .active {
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }
}

@media (min-width: 1400px) {
  .the-navigation {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background: $GRAY;
    z-index: 3;
    //position: v-bind(position);
    //margin-top: v-bind(marginTop);
    .link-group {
      display: flex;
      width: 100%;

      .link {
        display: flex;
        text-decoration: none;
        text-align: center;
        font-weight: 500;
        font-size: 1.5rem;
        color: $BLACK;
        font-family: Nunito-SemiBold, sans-serif;
        padding-right: 8px;
        padding-left: 8px;
      }

      .active {
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }
}
</style>
