<template>
  <div class="the-navigation" id="navbar">
    <UILinkGroup :links="navigationLinks" />
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import UILinkGroup from '~/components/UI/UILinkGroup.vue';
import { NAVIGATION_LINKS_RUS } from '~/helpers/services/links.services';
import { NavigationLinksType } from '~/helpers/types/links.types';

const navigationLinks: Ref<NavigationLinksType> = ref(NAVIGATION_LINKS_RUS);
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
    background: $MAIN_AQUAMARINE;
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
    background: $MAIN_AQUAMARINE;
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
    background: $MAIN_AQUAMARINE;
    z-index: 3;
    position: v-bind(position);
    margin-top: v-bind(marginTop);
  }
}
</style>
