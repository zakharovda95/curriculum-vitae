<template>
  <div class="summary-page">
    <div class="content">
      <AnchorGroup
        v-if="offset > headerHeight"
        class="anchors"
        :anchors="anchors"
        @custom:change-section="scrollIntoSection"
        title="Резюме"
      />
      <div>
        <PageContentContainer justify="flex-start" :height="previewHeight" name="preview">
          <ThePreviews />
        </PageContentContainer>
      </div>
      <PageContentContainer name="personal-information">
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
      </PageContentContainer>
      <PageContentContainer name="objective">
        <ContentBlock class="section">
          <template #header>
            <h1>Цели</h1>
          </template>
          <template #content>
            <UIParagraph tag="h2">
              Я - начинающий, но перспективный разработчик с небольшим опытом работы в реальном
              проекте. Я ищу свою первую работу, чтобы она стала основой моей будущей карьеры. Я
              претендую на позицию трейни или junior frontend разработчика.
            </UIParagraph>
            <UIParagraph tag="h2" title="Что я смогу дать">
              свой небольшой опыт работы в проекте (где основной задачей был поиск и исправление
              багов), свои провессиональные и личностные качества на 100%, а так же свою душу и
              сердце :)
            </UIParagraph>
            <UIParagraph tag="h2" title="Что я ожидаю получить">
              прежде всего - опыт. Так же крутую комманду, интересные таски (но я готов браться за
              любые, самые скучные задания, пока не докажу, что я способен на большее). А так же
              зарплату и возможность карьерного роста по результатам моей работы.
            </UIParagraph>
            <UIParagraph tag="h3">
              Если вы ищете джуниора с опытом работы 100+ лет и знанием всех неземных технологий -
              это не я. Но если вам нужен человек, кто реально будет стараться, потому что это то,
              чем он хочет заниматься всю жизнь - вы можете дать мне шанс! :)
            </UIParagraph>
          </template>
        </ContentBlock>
      </PageContentContainer>
      <PageContentContainer name="education">
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
      </PageContentContainer>
      <PageContentContainer name="work-experience">
        <ContentBlock class="section">
          <template #header>
            <h1>Опыт Работы</h1>
          </template>
          <template #content>
            <UIParagraph tag="h3">
              К сожалению, у меня нет официального опыта работы, и возможно ваша работа будет для
              меня первой. <br />
              У меня есть опыт работы в реальном проекте с коммандой, опыт с учебной практики и опыт
              на стартап-проекте, в котором я являюсь junior frontend разработчиком
            </UIParagraph>
            <UIParagraph tag="h2" title="Учебная практика">
              <br />
              - практика на курсе по нативному JS (c 26 августа 2021 по 14 октября 2021) <br />
              - практика на курсе по Vue.JS (c 25 января 2022 по 18 марта 2022)
            </UIParagraph>
            <UIParagraph tag="h2" title="Самостоятельная работа">
              <br />
              Работа в свободное время (в сумме 4 месяца). Получил опыт работы в коммерческом
              проекте. Научился свободно ориентироваться в проекте, локализовывать и устранять баги.
              Узнал как происходит реальная разработка в комманде
            </UIParagraph>
            <UIParagraph tag="h2" title="Стартап">
              <br />
              Я являюсь разработчиком в стартап проекте - браузерной игры CastleKeepers. Это
              некоммерческий проект с небольшой коммандой, и небольшой (пока) целевой аудиторией.
              Подробнее в разделе <span class="to-code-examples">"Примеры&nbsp;кода"</span>
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
import { useCalculateDOMElementsHeight } from '~/composables/useCalculateDOMElementsHeight';
import { computed, ref, Ref } from 'vue';
import ContentBlock from '~/components/shared/ContentBlock.vue';
import UIButton from '~/components/ui/UIButton.vue';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import { useOffsetWatcher } from '~/composables/useOffsetWatcher';
import UIParagraph from '~/components/ui/UIParagraph.vue';
import { useWindowWidthWatcher } from '~/composables/useWindowWidthWatcher';

const headerHeight: Ref<number> = useCalculateDOMElementsHeight(['#top', '#header', '#navbar']);
const previewHeight: Ref<string> = computed(() => `100vh - ${headerHeight.value}px`);

const { offset } = useOffsetWatcher();
const { widthX } = useWindowWidthWatcher();

const anchors: Ref<Array<{ name: string; id: string }>> = ref([
  {
    name: 'Информация',
    id: 'personal-information',
  },
  {
    name: 'Цели',
    id: 'objective',
  },
  {
    name: 'Образование',
    id: 'education',
  },
  {
    name: 'Опыт Работы',
    id: 'work-experience',
  },
]);

const scrollIntoSection = (anchorName: string) => {
  const sectionName = document.querySelector(`#${anchorName}`);
  sectionName.scrollIntoView({ block: 'end', behavior: 'smooth' });
};
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .summary-page {
    padding: 24px;

    .content {
      .anchors {
        position: fixed;
        top: 36vh;
        right: 6vw;
        text-decoration: none;
      }

      .section {
        .to-code-examples {
          text-decoration: underline;
          cursor: pointer;
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
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .summary-page {
    padding: 24px;

    .content {
      .anchors {
        position: fixed;
        top: 36vh;
        right: 6vw;
        text-decoration: none;
      }

      .section {
        .to-code-examples {
          text-decoration: underline;
          cursor: pointer;
        }

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
}

@media (min-width: 1400px) {
  .summary-page {
    padding: 24px;

    .content {
      .anchors {
        position: fixed;
        top: 36vh;
        right: 6vw;
        text-decoration: none;
      }

      .section {
        .to-code-examples {
          text-decoration: underline;
          cursor: pointer;
        }

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
}
</style>
