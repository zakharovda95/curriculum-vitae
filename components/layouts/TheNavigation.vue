<template>
  <div class="the-navigation" :style="styles">
    <UILinkGroup :links="navlinks" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref, watch } from 'vue';
import UILinkGroup from '~/components/ui/UILinkGroup.vue';
import { useOffsetWatcher } from '~/composables/useOffsetWatcher';

const navlinks = ref([
  {
    name: 'Summary',
    path: '/summary',
  },
  {
    name: 'Stack',
    path: '/stack',
  },
  {
    name: 'Code Examples',
    path: '/code-examples',
  },
]);

const totalHeight: Ref<number> = ref(0);
const styles: Ref<{ [key: string]: string } | null> = ref(null);

const { offset } = useOffsetWatcher();

onMounted(() => {
  const headerHeight = document.querySelector('#header');
  const topHeight = document.querySelector('#top');
  totalHeight.value = headerHeight.clientHeight + topHeight.clientHeight;
});

watch(
  offset,
  () => {
    if (totalHeight.value <= offset.value) {
      styles.value = {
        'position': 'fixed',
        'margin-top': '60px',
      };
    } else {
      styles.value = {
        'position': 'static',
        'margin-top': '0',
      };
    }
  },
  { deep: true },
);
</script>

<style scoped lang="scss">
@import '../../assets/css/_constants.scss';
@import '../../assets/css/hoverable.css';

.the-navigation {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: $MAIN_AQUAMARINE;
  z-index: 3;
}
</style>
