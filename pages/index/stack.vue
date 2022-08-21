<template>
  <div class="stack-page">
    <div class="content">
      <AnchorGroup v-if="offset > headerHeight" class="anchors" :anchors="anchors" title="Стек" />
      <PageContentContainer justify="flex-start" :height="previewHeight" name="preview">
        <ThePreviews />
      </PageContentContainer>
      <PageContentContainer class="section-wrapper" name="main-stack">
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
              <span class="to-full-stack" @click="scrollIntoSection(AnchorNamesEnum.fullStack)">
                "Полный&nbsp;стек"
              </span>
            </UIParagraph>
          </template>
        </ContentBlock>
      </PageContentContainer>
      <PageContentContainer class="section-wrapper" name="full-stack">
        <ContentBlock class="section">
          <template #header>
            <h1>Полный Стек</h1>
          </template>
          <template #content>
            <UIList class="stack-list" v-slot="item: StackListItemType" :list="stackList">
              <StackListItem :stack-list-item="item" />
            </UIList>
          </template>
        </ContentBlock>
      </PageContentContainer>
      <PageContentContainer class="section-wrapper" name="soft-skills">
        <ContentBlock class="section">
          <template #header>
            <h1>Софт-Скиллы</h1>
          </template>
          <template #content>
            <UIParagraph title="Самостоятельность" tag="h2">
              осознаю, что отвлекать ментора от работы по любому пустяку это плохо. Всегда задаю
              вопросы по таску перед тем как приступить к его выполнению. Ищу решение проблем,
              появившихся в процессе, самостоятельно, прибегая к помощи наставика только в крайнем
              случае, или когда поиск решения может сильно повлиять на производительность.
            </UIParagraph>
            <UIParagraph title="Обучаемость" tag="h2">
              люблю изучать новые технологии, и изучаю их в свободное время. Всегда обращаюсь к
              нескольким источникам информации. Читаю документацию, статьи, видеогайды и
              дополнительную литературу. Срадостью воспринимаю обоснованную критику, перепишу весь
              код и в следующий раз не наступлю на те же грабли.
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
              не пасую перед трудностями, а воспринимаю их как квест, пройдя который получаешь пойнт
              в копилку своего опыта.
            </UIParagraph>
            <UIParagraph title="Коммуникабельность" tag="h2">
              легко общаюсь с людьми и нахожу с ними общий язык. Не обращаю внимания на колкости
              токсичных людей, и стараюсь видеть всех только с лучшей стороны.
            </UIParagraph>
          </template>
        </ContentBlock>
      </PageContentContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThePreviews from '~/components/pages/main/ThePreviews.vue';
import PageContentContainer from '~/components/shared/PageContentContainer.vue';
import { AnchorsType } from '~/helpers/types/links.types';
import { STACK_ANCHORS_RUS } from '~/helpers/services/links.services';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import ContentBlock from '~/components/shared/ContentBlock.vue';
import UIParagraph from '~/components/UI/UIParagraph.vue';
import UIList from '~/components/UI/UIList.vue';
import { scrollIntoSection } from '~/helpers/methods/scroll.methods';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';
import { StackListItemType } from '~/helpers/types/content/stack-list-item.types';
import { STACK_LIST_RUS } from '~/helpers/content/stack/stack-list.content';
import StackListItem from '~/components/pages/stack/StackListItem.vue';
import { Ref, ref } from 'vue';

const anchors: Ref<AnchorsType> = ref(STACK_ANCHORS_RUS);
const stackList: Ref<StackListItemType[]> = ref(STACK_LIST_RUS);
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .summary-page {
    padding: 24px;

    .content {
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
}

@media (min-width: 801px) and (max-width: 1399px) {
  .summary-page {
    padding: 24px;

    .content {
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
}

@media (min-width: 1400px) {
  .stack-page {
    padding: 24px;

    .content {
      .anchors {
        position: fixed;
        top: 36vh;
        right: 6vw;
        text-decoration: none;
      }

      .section-wrapper {
        display: flex;
        // TODO Костыль, придумать как убрать
        .stack-list {
          margin-top: 815px;
        }

        .section {
          .to-full-stack {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
