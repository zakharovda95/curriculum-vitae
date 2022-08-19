<template>
  <div class="objective">
    <ContentBlock class="section">
      <template #header>
        <h1>Цели</h1>
      </template>
      <template #content>
        <UIParagraph tag="h2">
          Я - начинающий, разработчик (занимаюсь разработкой с сентября 2021). Имею небольшой опыт в
          коммерческом проекте. Я ищу свою первую работу, чтобы она стала основой моей будущей
          карьеры. Я претендую на позицию трейни или junior frontend разработчика.
        </UIParagraph>
        <UIParagraph tag="h2" title="Что я смогу дать">
          свой опыт работы в проекте (основной задачей был поиск и исправление багов) и стартапе
          (основной задачей была разработка элементов интерфейса некоторых разделов, багофиксинг) и
          свои профессиональные и личностные навыки которые я приобрел и преобрету в будущем.
        </UIParagraph>
        <UIParagraph tag="h2" title="Что я ожидаю получить">
          прежде всего - опыт. Работу в крутой позитивной комманде, интересные таски (но я готов
          браться за любые, самые скучные задания, пока не докажу, что я способен на большее). А так
          же зарплату и возможность карьерного роста по результатам моей работы.
        </UIParagraph>
        <UIParagraph tag="h4" title="P.S">
          Если вы ищете джуниора с опытом работы 100+ лет и знанием всех земных и инопланетных
          технологий - это не я. Но если вам нужен человек, кто реально будет стараться, потому что
          это то, чем он хочет заниматься всю жизнь - вы можете дать мне шанс! :)
        </UIParagraph>
      </template>
    </ContentBlock>
  </div>
</template>

<script setup lang="ts">
import UIParagraph from '~/components/UI/UIParagraph.vue';
import ContentBlock from '~/components/shared/ContentBlock.vue';
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'section',
});
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .objective {
    padding: 24px;

    .anchors {
      display: none;
    }

    .section {
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .objective {
    padding: 24px;

    .anchors {
      display: none;
    }

    .section {
    }
  }
}

@media (min-width: 1400px) {
  .objective {
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
