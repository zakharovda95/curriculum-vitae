<template>
  <div class="anchor-group">
    <div class="header">
      <h2>Summary</h2>
    </div>
    <div class="sections">
      <UIButton
        class="section"
        :class="{ 'active': activeAnchor === anchor.id }"
        @click="changeSection(anchor)"
        v-for="anchor in anchors"
        :key="anchor.name"
      >
        <span v-if="activeAnchor === anchor.id">&lt </span>
        <span>{{ anchor.name }}</span>
        <span v-if="activeAnchor === anchor.id"> /&gt</span>
      </UIButton>
    </div>
    <UIButton class="to-the-top" @click="toTheTop"> To the Top</UIButton>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref, Ref } from 'vue';
import UIButton from '~/components/ui/UIButton.vue';

const props = defineProps({
  anchors: {
    type: Array as PropType<Array<{ name: string; id: string }>>,
    required: true,
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
.anchor-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  height: 30vh;
  width: 15vw;

  .to-the-top {
    font-size: 1.5rem;
    padding: 0 10px;
  }

  .header {
    height: 20%;
  }

  .sections {
    padding: 12px;
    align-items: center;

    .section {
      margin: 5px;
      padding: 0 10px;
    }
  }
}

.active {
  font-weight: 600;
  text-decoration: underline;
}
</style>
