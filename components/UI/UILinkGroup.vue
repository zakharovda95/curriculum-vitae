<template>
  <div class="ui-link-group">
    <UIList v-slot="item" :list="links" direction="row" justify="space-around">
      <NuxtLink class="link" :to="item.path">
        <span v-if="route.name.includes(item.path.name)">&lt </span>
        <span>{{ item.name }}</span>
        <span v-if="route.name.includes(item.path.name)"> /&gt</span>
      </NuxtLink>
    </UIList>
  </div>
</template>

<script setup lang="ts">
import { NavigationLinksType } from '~/helpers/types/links.types';
import UIList from '~/components/UI/UIList.vue';

import { PropType } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  links: {
    type: Array as PropType<NavigationLinksType>,
    required: true,
  },
  direction: {
    type: String as PropType<'row' | 'column'>,
    required: false,
    default: () => 'row',
  },
});

const route = useRoute();
</script>

<style scoped lang="scss">
@import '../../assets/css/_constants.scss';
@import '../../assets/css/hoverable.css';

@media (max-width: 800px) {
  .ui-link-group {
    display: flex;
    flex-direction: v-bind(direction);
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

    .router-link-active {
      font-weight: 600;
      text-decoration: underline;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .ui-link-group {
    display: flex;
    flex-direction: v-bind(direction);
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

    .router-link-active {
      font-weight: 600;
      text-decoration: underline;
    }
  }
}

@media (min-width: 1400px) {
  .ui-link-group {
    display: flex;
    flex-direction: v-bind(direction);
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

    .router-link-active {
      font-weight: 600;
      text-decoration: underline;
    }
  }
}
</style>
