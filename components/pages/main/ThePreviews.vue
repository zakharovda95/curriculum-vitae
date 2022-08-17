<template>
  <div class="the-previews">
    <h1>{{ previews }}</h1>
    <Shift class="shift">
      <template #button>
        <UIIcon size="96px" class="go-to" src="assets/img/arrow-go.svg" />
      </template>
    </Shift>
  </div>
</template>

<script setup lang="ts">
import UIIcon from '~/components/UI/UIIcon.vue';
import Shift from '~/components/shared/Shift.vue';
import { computed, Ref } from 'vue';
import { useRoute } from 'vue-router';
import { PageNameEnum } from '~/helpers/enums/page-name.enums';

const route = useRoute();

const previews: Ref<string> = computed(() => {
  switch (route.name) {
    case PageNameEnum.summary:
      return 'Основная информация, образование и опыт';
    case PageNameEnum.stack:
      return 'Скиллы и стек технологий';
    case PageNameEnum.codeExamples:
      return 'Демонстрация кода, ссылки на проекты';
  }
});
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .the-previews {
    display: flex;
    background: $MAIN_WHITE;
    padding: 12px;
    margin: 0 auto;
    width: 90%;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    justify-content: center;
    text-align: center;

    h1 {
      width: 80%;
      color: $MAIN_BLACK;
      font-size: 1.5rem;
    }

    .shift {
      display: none;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .the-previews {
    display: flex;
    width: 70%;
    background: $MAIN_WHITE;
    padding: 24px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    justify-content: center;
    text-align: center;

    h1 {
      width: 80%;
      color: $MAIN_BLACK;
      font-size: 2rem;
    }

    .shift {
      display: none;
    }
  }
}

@media (min-width: 1400px) {
  .the-previews {
    display: flex;
    width: 70%;
    background: $MAIN_WHITE;
    padding: 24px;
    //box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.3);
    //margin: 0 auto;
    text-align: center;
    align-items: center;
    border: 1px solid $MAIN_AQUAMARINE;
    border-right: 15px solid $MAIN_AQUAMARINE;

    h1 {
      width: 80%;
      color: $MAIN_BLACK;
      font-size: 2.5rem;
    }

    .go-to {
      width: 200px;
      align-self: center;
      cursor: pointer;
      margin: 20px;
    }

    .go-to:hover {
      transition: 0.5s;
      transform: scale(1.1);
    }
  }
}
</style>
