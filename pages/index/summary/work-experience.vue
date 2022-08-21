<template>
  <div class="work-experience">
    <AnchorGroup class="anchors" :anchors="anchors" title="Резюме" />
    <ContentBlock class="section">
      <template #header>
        <h1>Опыт Работы</h1>
      </template>
      <template #content>
        <UIParagraph tag="h3">
          У меня нет официального опыта работы (в сфере IT), я надеюсь именно ваша работа будет для
          меня первой. <br />
          У меня есть опыт работы в реальном проекте с коммандой, опыт с учебной практики и опыт на
          стартап-проекте.
        </UIParagraph>
        <UIParagraph tag="h2" title="Учебная практика">
          <br />
          - практика на курсе по нативному JS (c 26 августа 2021 по 14 октября 2021) <br />
          - практика на курсе по Vue.JS (c 25 января 2022 по 18 марта 2022)
        </UIParagraph>
        <UIParagraph tag="h2" title="Самостоятельная работа">
          <br />
          Неофициальная работа в коммерческом проекте (в сумме 4 месяца). Научился свободно
          ориентироваться в довольно большом проекте, локализовывать и устранять баги. Узнал как
          происходит реальная разработка.
        </UIParagraph>
        <UIParagraph tag="h2" title="Стартап">
          <br />
          Я учавствую в стартап проекте - браузерной игры CastleKeepers. Это некоммерческий проект с
          небольшой коммандой. Подробнее в разделе
          <span class="to-code-examples">"Примеры&nbsp;кода"</span>
        </UIParagraph>
      </template>
    </ContentBlock>
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors"></MobileNavigation>
  </div>
</template>

<script setup lang="ts">
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import UIParagraph from '~/components/UI/UIParagraph.vue';
import ContentBlock from '~/components/shared/ContentBlock.vue';
import { definePageMeta, useWindowWidthWatcher } from '#imports';
import { ref, Ref } from 'vue';
import { AnchorsType } from '~/helpers/types/links.types';
import { SUMMARY_ANCHORS_RUS } from '~/helpers/services/links.services';
import MobileNavigation from '~/components/shared/MobileNavigation.vue';

definePageMeta({
  layout: 'section',
});

const anchors: Ref<AnchorsType> = ref(SUMMARY_ANCHORS_RUS);

const { widthX } = useWindowWidthWatcher();
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .work-experience {
    .anchors {
      display: none;
    }

    .section {
      display: flex;
      .to-code-examples {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .work-experience {
    .anchors {
      display: none;
    }

    .section {
      .to-code-examples {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 1400px) {
  .work-experience {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 7vw;
      text-decoration: none;
    }

    .section {
      .to-code-examples {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
