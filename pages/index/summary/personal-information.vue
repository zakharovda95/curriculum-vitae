<template>
  <div class="personal-information">
    <AnchorGroup class="anchors" :anchors="anchors" title="Резюме" />
    <ContentBlock class="section">
      <template #header>
        <h1>Информация</h1>
      </template>
      <template #content>
        <UIParagraph tag="h2" title="Имя">Дмитрий Захаров</UIParagraph>
        <UIParagraph tag="h2" title="Дата рождения">13 мая 1995 (27 лет)</UIParagraph>
        <UIParagraph tag="h2" title="Адрес">Йошкар-Ола, Россия</UIParagraph>
        <UIParagraph tag="h2" title="Гражданство">Российская Федерация</UIParagraph>
        <UIParagraph tag="h2" title="Семейное положение">Не женат</UIParagraph>
        <UIParagraph tag="h2" title="Языки">
          Русский (основной), Английский - A2 (но я повышаю свои навыки каждый день!)
        </UIParagraph>
      </template>
    </ContentBlock>
  </div>
</template>

<script setup lang="ts">
import UIParagraph from '~/components/UI/UIParagraph.vue';
import ContentBlock from '~/components/shared/ContentBlock.vue';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import { SUMMARY_ANCHORS_RUS } from '~/helpers/services/links.services';
import { AnchorsType } from '~/helpers/types/links.types';
import { ref, Ref } from 'vue';

const anchors: Ref<AnchorsType> = ref(SUMMARY_ANCHORS_RUS);
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .personal-information {
    padding: 24px;

    .anchors {
      display: none;
    }

    .section {
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .personal-information {
    padding: 24px;

    .anchors {
      display: none;
    }

    .section {
    }
  }
}

@media (min-width: 1400px) {
  .personal-information {
    padding: 24px;

    .anchors {
      position: fixed;
      top: 36vh;
      right: 6vw;
      text-decoration: none;
    }

    .section {
    }
  }
}
</style>
