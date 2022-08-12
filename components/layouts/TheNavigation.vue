<template>
  <div class="the-navigation">
    <UILinkGroup :links="navlinks" />
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
import UILinkGroup from '~/components/ui/UILinkGroup.vue';
import { useOffsetWatcher } from '~/composables/useOffsetWatcher';
import { useCalculateDOMElementsHeight } from '~/composables/useCalculateDOMElementsHeight';
import { useWindowWidthWatcher } from '~/composables/useWindowWidthWatcher';

const navlinks = ref([
  {
    name: 'Резюме',
    path: '/summary',
  },
  {
    name: 'Навыки',
    path: '/stack',
  },
  {
    name: 'Код',
    path: '/code-examples',
  },
]);

const styles: Ref<{ [key: string]: string } | null> = ref(null);
const position: Ref<string> = ref('static');
const marginTop: Ref<string | number> = ref(0);

const { offset } = useOffsetWatcher();
const { widthX } = useWindowWidthWatcher();
const totalHeight = useCalculateDOMElementsHeight(['#header', '#top']);

watch(
  offset,
  () => {
    if (widthX.value > 800) {
      if (totalHeight.value <= offset.value) {
        position.value = 'fixed';
        marginTop.value = '60px';
      } else {
        position.value = 'static';
        marginTop.value = 0;
      }
    }
    if (widthX.value <= 800) {
      position.value = 'static';
      marginTop.value = 0;
    }
  },
  { deep: true, immediate: true },
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
    background: $MAIN_AQUAMARINE;
    z-index: 3;
    position: static;
    margin-top: 0;
  }
}

@media (min-width: 1700px) {
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
