<template>
  <div class="soft-skills">
    <AnchorGroup class="anchors" :anchors="anchors" title="Стек" />
    <ContentBlock class="section">
      <template #header>
        <h1>Софт-Скиллы</h1>
      </template>
      <template #content>
        <UIParagraph title="Самостоятельность" tag="h2">
          осознаю, что отвлекать ментора от работы по любому пустяку это плохо. Всегда задаю вопросы
          по таску перед тем как приступить к его выполнению. Ищу решение проблем, появившихся в
          процессе, самостоятельно, прибегая к помощи наставика только в крайнем случае, или когда
          поиск решения может сильно повлиять на производительность.
        </UIParagraph>
        <UIParagraph title="Обучаемость" tag="h2">
          люблю изучать новые технологии, и изучаю их в свободное время. Всегда обращаюсь к
          нескольким источникам информации. Читаю документацию, статьи, видеогайды и дополнительную
          литературу. Срадостью воспринимаю обоснованную критику, перепишу весь код и в следующий
          раз не наступлю на те же грабли.
        </UIParagraph>
        <UIParagraph title="Адаптивность" tag="h2">
          свободно переключаюсь между проектами и задачами.
        </UIParagraph>
        <UIParagraph title="Самоорганизация" tag="h2">
          трекинг времени и фиксация прогресса для меня уже неотъемлемя часть разработки. Строю
          планы работ и стараюсь оценивать затраты времени на ее выполнение. Стараюсь много
          работать, но не забывать про отдых.
        </UIParagraph>
        <UIParagraph title="Позитивное мышление" tag="h2">
          не пасую перед трудностями, а воспринимаю их как квест, пройдя который получаешь пойнт в
          копилку своего опыта.
        </UIParagraph>
        <UIParagraph title="Коммуникабельность" tag="h2">
          легко общаюсь с людьми и нахожу с ними общий язык. Не обращаю внимания на колкости
          токсичных людей, и стараюсь видеть всех только с лучшей стороны.
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

definePageMeta({
  layout: 'section',
});

const anchors: Ref<AnchorsType> = ref(STACK_ANCHORS_RUS);

const { widthX } = useWindowWidthWatcher();
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .soft-skills {
    .anchors {
      display: none;
    }

    .section {
      display: flex;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .soft-skills {
    .anchors {
      display: none;
    }

    .section {
    }
  }
}

@media (min-width: 1400px) {
  .soft-skills {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 7vw;
      text-decoration: none;
    }

    .section {
    }
  }
}
</style>
