<template>
  <div class="shift" @click="start">
    <slot name="button" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PageNameEnum } from '~/helpers/enums/page-name.enums';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';

const route = useRoute();

const firstElementDependingOnTheRoute = computed(() => {
  switch (route.name) {
    case PageNameEnum.summary:
      return AnchorNamesEnum.personalInformation;
    case PageNameEnum.stack:
      return AnchorNamesEnum.mainStack;
  }
});

const start = (): void => {
  const screen: HTMLElement = document.querySelector(`#${firstElementDependingOnTheRoute.value}`);
  const screenHeight: number = screen.offsetHeight;
  window.scrollBy({
    top: screenHeight - 16,
    left: 0,
    behavior: 'smooth',
  });
};
</script>
