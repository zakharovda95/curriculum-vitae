<template>
  <div ref="observer" class="ui-observer" />
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';

const props = defineProps({
  target: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['custom:cross-section']);
const root: Ref<Element | null> = ref(null);

onMounted(() => {
  const element = document.querySelector(`#${props.target}`);
  const options: Ref<{ root: Element; threshold: number }> = ref({
    root: root.value,
    threshold: 0.7,
  });
  const callback = (): void => {
    emits('custom:cross-section', props.target);
  };
  const observer = new IntersectionObserver(callback, options.value);
  observer.observe(element);
});
</script>

<style scoped lang="scss"></style>
