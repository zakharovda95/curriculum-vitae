<template>
  <div class="education">
    <ContentBlock class="section">
      <template #header>
        <h1>Образование</h1>
      </template>
      <template #content>
        <UIParagraph tag="h2" title="Среднее специальное образование">
          2011 - 2016; Строительство и эксплуатации зданий и сооружений, Йошкар-Олинский
          Строительный Техникум, Йошкар-Ола
        </UIParagraph>
        <UIParagraph tag="h2" title="Высшее образование (неоконченное)">
          2016 - 2019; Институт строительства и архитектуры, Поволжский Государственный
          Технологический Университет, Йошкар-Ола
        </UIParagraph>
        <UIParagraph tag="h2" title="В качестве программиста"></UIParagraph>
        <div class="course">
          <UIParagraph tag="h2"> Курсы JavaScript.ru - JavaScript/DOM/Interfaces</UIParagraph>
          <UIButton class="certificate">сертификат</UIButton>
        </div>
        <div class="course">
          <UIParagraph tag="h2"> Курсы JavaScript.ru - Vue.Js 3</UIParagraph>
          <UIButton class="certificate">сертификат</UIButton>
        </div>
      </template>
    </ContentBlock>
  </div>
</template>

<script setup lang="ts">
import UIParagraph from '~/components/UI/UIParagraph.vue';
import ContentBlock from '~/components/shared/ContentBlock.vue';
import UIButton from '~/components/UI/UIButton.vue';
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'section',
});
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .education {
    padding: 24px;

    .anchors {
      display: none;
    }

    .course {
      display: flex;

      .certificate {
        margin-left: 5px;
        text-decoration: underline;
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .education {
    padding: 24px;

    .anchors {
      display: none;
    }

    .section {
      .course {
        display: flex;

        .certificate {
          margin-left: 20px;
          text-decoration: underline;
        }
      }
    }
  }
}

@media (min-width: 1400px) {
  .summary-page {
    padding: 24px;

    .anchors {
      position: fixed;
      top: 36vh;
      right: 6vw;
      text-decoration: none;
    }

    .section {
      .course {
        display: flex;

        .certificate {
          margin-left: 20px;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
