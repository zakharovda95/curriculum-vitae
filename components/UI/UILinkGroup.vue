<template>
  <div class="ui-link-group">
    <NuxtLink :to="link.path" v-for="link in links" class="link" :key="link.name">
      <span v-if="route.name.includes(link.path.name)">&lt </span>
      <span>{{ link.name }}</span>
      <span v-if="route.name.includes(link.path.name)"> /&gt</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { NavigationLinksType } from '~/helpers/types/links.types';

import { PropType } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  links: {
    type: Array as PropType<NavigationLinksType>,
    required: true,
  },
  direction: {
    type: String as PropType<'flex-start' | 'column'>,
    required: false,
    default: () => 'flex-start',
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
    width: 100%;
    justify-content: space-around;
    flex-direction: v-bind(direction);

    .link {
      font-weight: 500;
      font-size: 1rem;
      color: $MAIN_BLACK;
      font-family: Nunito-SemiBold, sans-serif;
      padding-right: 8px;
      padding-left: 8px;
      text-decoration: none;
      text-align: center;
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
    width: 100%;
    justify-content: space-around;
    flex-direction: v-bind(direction);

    .link {
      font-weight: 500;
      font-size: 1.3rem;
      color: $MAIN_BLACK;
      font-family: Nunito-SemiBold, sans-serif;
      padding-right: 8px;
      padding-left: 8px;
      text-decoration: none;
      text-align: center;
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
    width: 100%;
    justify-content: space-around;
    flex-direction: v-bind(direction);

    .link {
      font-weight: 500;
      font-size: 1.5rem;
      color: $MAIN_BLACK;
      font-family: Nunito-SemiBold, sans-serif;
      padding-right: 8px;
      padding-left: 8px;
      text-decoration: none;
      text-align: center;
    }

    .router-link-active {
      font-weight: 600;
      text-decoration: underline;
    }
  }
}
</style>
