<template>
  <div class="mobile-navigation">
    <UIButton @click="goToPrevious" class="section" v-if="anchorsData.previous !== null">
      &#8249; {{ anchorsData.previous.name }}
    </UIButton>
    <span class="title section">{{ anchorsData.active.name }}</span>
    <UIButton @click="goToNext" class="section" v-if="anchorsData.next !== null">
      {{ anchorsData.next.name }} &#8250;
    </UIButton>
  </div>
</template>

<script setup lang="ts">
import UIButton from '~/components/UI/UIButton.vue';

import { AnchorsDataType, AnchorsType } from '~/helpers/types/links.types';

import { useRoute, useRouter } from 'vue-router';
import { computed, PropType, Ref } from 'vue';

const props = defineProps({
  anchors: {
    type: Array as PropType<AnchorsType>,
    required: true,
  },
});
const route = useRoute();
const router = useRouter();

const anchorsData: Ref<AnchorsDataType> = computed(() => {
  const anchorsData: AnchorsDataType = {
    active: null,
    previous: null,
    next: null,
  };

  props.anchors.forEach((anchor, index, array) => {
    let activeAnchorIndex: number | null = null;

    if (anchor.id === route.name) {
      anchorsData.active = anchor;
      activeAnchorIndex = index;

      if (index === 0) {
        anchorsData.previous = null;
      } else {
        anchorsData.previous = array[activeAnchorIndex - 1];
      }

      if (index === array.indexOf(array.at(-1))) {
        anchorsData.next = null;
      } else {
        anchorsData.next = array[activeAnchorIndex + 1];
      }
    }
  });

  return anchorsData;
});

const goToNext = (): void => {
  router.push({ name: anchorsData.value.next.id });
};

const goToPrevious = (): void => {
  router.push({ name: anchorsData.value.previous.id });
};
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

.mobile-navigation {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: $GRAY;

  .title {
    font-weight: 600;
  }

  .section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 1rem;
    width: 33%;
  }
}
</style>
