<template>
  <div class="the-navigation" id="navbar">
    <UILinkGroup :links="navigationLinks" />
  </div>
</template>

<script setup lang="ts">
import UILinkGroup from '~/components/UI/UILinkGroup.vue';

import { links } from '~/helpers/services/links.service';

import { NavigationLinksType } from '~/helpers/types/links.types';

import { computed, Ref } from 'vue';
import { useMainStore } from '~/stores/main.store';

const mainStore = useMainStore();

const lang: Ref<string> = computed(() => mainStore.lang);

const navigationLinks: Ref<NavigationLinksType> = computed(() =>
  links.getNavigationLinks(lang.value),
);
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
    position: v-bind(position);
    margin-top: v-bind(marginTop);
  }
}
</style>
