<template>
  <div class="education">
    <AnchorGroup class="anchors" :anchors="anchors" title="Резюме" />
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
    <MobileNavigation v-if="widthX < 1400" :anchors="anchors"></MobileNavigation>
  </div>
</template>

<script setup lang="ts">
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import UIParagraph from '~/components/UI/UIParagraph.vue';
import ContentBlock from '~/components/shared/ContentBlock.vue';
import UIButton from '~/components/UI/UIButton.vue';
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
  .education {
    .anchors {
      display: none;
    }

    .section {
      display: flex;
      .course {
        display: flex;

        .certificate {
          display: flex;
          justify-content: space-between;
          margin-left: 5px;
          text-decoration: underline;
        }
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .education {
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
  .education {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 7vw;
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
