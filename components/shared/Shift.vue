<template>
  <div class="shift" @click="goToSections">
    <slot name="button" />
  </div>
</template>

<script setup lang="ts">
import { PageNameEnum } from '~/helpers/enums/page-name.enums';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';

import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const firstSectionDependingOnTheRoute = computed(() => {
  switch (route.name) {
    case PageNameEnum.summary:
      return AnchorNamesEnum.personalInformation;
    case PageNameEnum.stack:
      return AnchorNamesEnum.mainStack;
    case PageNameEnum.codeExamples:
      return AnchorNamesEnum.projectList;
  }
});

const goToSections = (): void => {
  router.push({ name: firstSectionDependingOnTheRoute.value });
};
</script>

<style scoped lang="scss">
.shift {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
