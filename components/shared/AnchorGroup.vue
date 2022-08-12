<template>
  <div class="anchor-group">
    <div class="header">
      {{ title }}
    </div>
    <div class="sections">
      <UIButton
        class="section"
        :class="{ 'active': activeAnchor === anchor.id ||  }"
        @click="changeSection(anchor)"
        v-for="anchor in anchors"
        :key="anchor.name"
      >
        <span v-if="activeAnchor === anchor.id">&lt </span>
        <span class="text">{{ anchor.name }}</span>
        <span v-if="activeAnchor === anchor.id">&gt</span>
      </UIButton>
    </div>
    <UIButton class="to-the-top" @click="toTheTop">Наверх</UIButton>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, Ref, watch } from 'vue';
import UIButton from '~/components/ui/UIButton.vue';

const props = defineProps({
  anchors: {
    type: Array as PropType<Array<{ name: string; id: string }>>,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: () => 'Sections',
  },
  crossAnchor: {
    type: String,
    required: false,
    default: () => '',
  },
});

const emits = defineEmits(['custom:changeSection']);

const activeAnchor: Ref<string> = ref(props.anchors[0].id);

const changeSection = anchor => {
  emits('custom:changeSection', anchor.id);
  activeAnchor.value = anchor.id;
};

const toTheTop = (): void => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 1399px) {
  .anchor-group {
    display: none;
  }
}

@media (min-width: 1400px) {
  .anchor-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background: whitesmoke;
    padding: 12px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    height: 30vh;
    width: 15vw;
    color: $MAIN_BLACK;
    border: 4px solid $MAIN_AQUAMARINE;

    .to-the-top {
      font-size: 1.5rem;
      padding: 0 10px;
    }

    .header {
      height: 20%;
      font-size: 1.8rem;
      font-weight: 400;
      color: $MAIN_BLACK;
      border-bottom: 1px solid $MAIN_AQUAMARINE;
    }

    .sections {
      padding: 12px;
      align-items: center;

      .section {
        display: flex;
        margin: 10px 0;
        padding: 0 10px;
        align-items: center;
        justify-content: center;

        .text {
          margin: 0 5px;
        }
      }
    }
  }

  .active {
    font-weight: 600;
  }
}
</style>
