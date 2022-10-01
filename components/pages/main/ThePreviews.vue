<template>
  <div class="the-previews" id="preview">
    <h1>{{ previews }}</h1>
    <Shift class="shift">
      <template #button>
        <UIIcon
          :size="sizes"
          class="go-to"
          src="https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/common%2Farrow-go.svg?alt=media&token=7e3bf561-cbd1-44b0-83f4-136203256d33"
        />
      </template>
    </Shift>
  </div>
</template>

<script setup lang="ts">
import UIIcon from '~/components/UI/UIIcon.vue';
import Shift from '~/components/shared/Shift.vue';

import { useWindowWidthWatcher } from '~/composables/useWindowWidthWatcher';
import { useMainStore } from '~/stores/main.store';
import { preview } from '~/helpers/classes/previews.class';

import { PageNameEnum } from '~/helpers/enums/page-name.enums';

import { computed, Ref } from 'vue';
import { useRoute } from 'vue-router';
import { PreviewsType } from '~/helpers/types/content.types';

const route = useRoute();

const mainStore = useMainStore();

const lang: Ref<string> = computed(() => mainStore.lang);

const previewByLang: Ref<PreviewsType> = computed(() => preview.getPreview(lang.value));

const previews: Ref<string> = computed(() => {
  switch (route.name) {
    case PageNameEnum.summary:
      return previewByLang.value.summary;
    case PageNameEnum.stack:
      return previewByLang.value.stack;
    case PageNameEnum.codeExamples:
      return previewByLang.value.codeExamples;
  }
});

const { widthX } = useWindowWidthWatcher();

const sizes: Ref<string> = computed(() => {
  if (widthX.value >= 1400) {
    return '96px';
  } else if (widthX.value > 800 && widthX.value < 1400) {
    return '72px';
  } else {
    return '48px';
  }
});
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 799px) {
  .the-previews {
    display: flex;
    justify-content: center;
    text-align: center;
    width: calc(80%);
    background: $WHITE;
    padding: 12px;
    margin: 0 auto;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);

    h1 {
      display: flex;
      align-self: center;
      width: 80%;
      color: $BLACK;
      font-size: 1.5rem;
    }

    .go-to {
      display: flex;
      align-self: center;
      width: 60px;
      cursor: pointer;
      margin: 20px;
    }

    .go-to:hover {
      transition: 0.5s;
      transform: scale(1.1);
    }
  }
}

@media (min-width: 800px) and (max-width: 1399px) {
  .the-previews {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 70%;
    background: $WHITE;
    padding: 24px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    margin: 0 auto;

    h1 {
      display: flex;
      align-self: center;
      width: 80%;
      color: $BLACK;
      font-size: 2rem;
    }

    .go-to {
      width: 100px;
      align-self: center;
      cursor: pointer;
      margin: 20px;
    }

    .go-to:hover {
      transition: 0.5s;
      transform: scale(1.1);
    }
  }
}

@media (min-width: 1400px) {
  .the-previews {
    display: flex;
    width: 70%;
    background: $WHITE;
    padding: 24px;
    text-align: center;
    align-items: center;
    border: 1px solid $GRAY;
    border-right: 15px solid $GRAY;

    h1 {
      width: 80%;
      color: $BLACK;
      font-size: 2.5rem;
    }

    .go-to {
      width: 200px;
      align-self: center;
      cursor: pointer;
      margin: 20px;
    }

    .go-to:hover {
      transition: 0.5s;
      transform: scale(1.1);
    }
  }
}
</style>
