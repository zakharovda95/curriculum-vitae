<template>
  <div class="main-stack">
    <AnchorGroup class="anchors" :anchors="anchors" title="Стек" />
    <ContentBlock class="section">
      <template #header>
        <h1>Основной Стек</h1>
      </template>
      <template #content>
        <UIParagraph tag="h2">
          Это основные технологии с которыми я работаю, и которые предпочитаю на данный момент
        </UIParagraph>
        <UIParagraph tag="h2" title="Верстка"> HTML 5 и CSS 3</UIParagraph>
        <UIParagraph tag="h2" title="Препроцессоры"> SASS/SCSS</UIParagraph>
        <UIParagraph tag="h2" title="UI библиотеки">
          Работал с MDLite, немного MaterializeCSS, но в рамках Vue претпочитаю компонентные
          библиотеки вроде NaiveUi или Vuetify
        </UIParagraph>
        <UIParagraph tag="h2" title="Языки программирования">
          JavaScript ES 6+ в связке с TypeScript
        </UIParagraph>
        <UIParagraph tag="h2" title="Фреймворки">
          VueJS 2; VueJS 3 (Option/Composition API); Nuxt 2; Nuxt 3
        </UIParagraph>
        <UIParagraph tag="h2" title="Сборщики и таск-менеджеры">
          Gulp 4; Parcel-Bundler; В рамках CLI - Webpack или Vite
        </UIParagraph>
        <UIParagraph tag="h3">
          Подробнее про каждую технологию с которой я сталкивался можно посмотреть в разделе
          <span class="to-full-stack" @click="goToFullStack"> "Полный&nbsp;стек" </span>
        </UIParagraph>
      </template>
    </ContentBlock>
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors"></MobileNavigation>
  </div>
</template>

<script setup lang="ts">
import UIParagraph from '~/components/UI/UIParagraph.vue';
import ContentBlock from '~/components/shared/ContentBlock.vue';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import { STACK_ANCHORS_RUS } from '~/helpers/services/links.services';
import { AnchorsType } from '~/helpers/types/links.types';
import { ref, Ref } from 'vue';
import { definePageMeta, useWindowWidthWatcher } from '#imports';
import MobileNavigation from '~/components/shared/MobileNavigation.vue';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';
import { useRouter } from 'vue-router';

definePageMeta({
  layout: 'section',
});

const router = useRouter();

const anchors: Ref<AnchorsType> = ref(STACK_ANCHORS_RUS);

const { widthX } = useWindowWidthWatcher();

const goToFullStack = (): void => {
  router.push({ name: AnchorNamesEnum.fullStack });
};
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .main-stack {
    .anchors {
      display: none;
    }

    .section {
      display: flex;

      .to-full-stack {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .main-stack {
    .anchors {
      display: none;
    }

    .section {
      .to-full-stack {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 1400px) {
  .main-stack {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 7vw;
      text-decoration: none;
    }

    .section {
      .to-full-stack {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
