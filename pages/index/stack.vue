<template>
  <div class="stack-page">
    <div class="content">
      <PageContentContainer justify="flex-start" :height="previewHeight" name="preview">
        <ThePreviews />
      </PageContentContainer>
      <PageContentContainer :style="blockPadding" name="test-content"></PageContentContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThePreviews from '~/components/pages/main/ThePreviews.vue';
import PageContentContainer from '~/components/shared/PageContentContainer.vue';
import { useCalculateDOMElementsHeight } from '~/composables/useCalculateDOMElementsHeight';
import { computed } from 'vue';

const headerHeight = useCalculateDOMElementsHeight(['#top', '#header', '#navbar']);
const previewHeight = computed(() => `100vh - ${headerHeight.value}px`);

const navbarAndTopHeight = useCalculateDOMElementsHeight(['#top', '#navbar']);
const blockPadding = computed(() => ({ 'padding-top': `${navbarAndTopHeight.value + 30}px` }));
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

.stack-page {
  margin: 24px;
}
</style>
