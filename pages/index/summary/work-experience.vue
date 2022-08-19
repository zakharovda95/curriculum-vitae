<template>
  <PageContentContainer class="section-wrapper" name="work-experience">
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
  </PageContentContainer>
</template>

<script setup lang="ts">
import UIParagraph from '~/components/UI/UIParagraph.vue';
import ContentBlock from '~/components/shared/ContentBlock.vue';
import UIButton from '~/components/UI/UIButton.vue';
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';
</style>
