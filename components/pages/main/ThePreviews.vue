<template>
  <div class="the-previews">
    <h1>{{ previews }}</h1>
    <Shift class="shift">
      <template #button>
        <UIIcon :size="sizes" class="go-to" src="assets/img/arrow-go.svg" />
      </template>
    </Shift>
  </div>
</template>

<script setup lang="ts">
import UIIcon from '~/components/UI/UIIcon.vue';
import Shift from '~/components/shared/Shift.vue';

import { PREVIEWS_RUS } from '~/helpers/content/previews.content';

import { useWindowWidthWatcher } from '~/composables/useWindowWidthWatcher';

import { PageNameEnum } from '~/helpers/enums/page-name.enums';

import { computed, Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const previews: Ref<string> = computed(() => {
  switch (route.name) {
    case PageNameEnum.summary:
      return PREVIEWS_RUS.summary;
    case PageNameEnum.stack:
      return PREVIEWS_RUS.stack;
    case PageNameEnum.codeExamples:
      return PREVIEWS_RUS.codeExamples;
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

@media (max-width: 800px) {
  .the-previews {
    display: flex;
    background: $WHITE;
    padding: 12px;
    margin: 0 auto;
    width: calc(80%);
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    justify-content: center;
    text-align: center;

    h1 {
      width: 80%;
      color: $BLACK;
      font-size: 1.5rem;
    }

    .go-to {
      width: 60px;
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

@media (min-width: 801px) and (max-width: 1399px) {
  .the-previews {
    display: flex;
    width: 70%;
    background: $WHITE;
    padding: 24px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    justify-content: center;
    text-align: center;

    h1 {
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
