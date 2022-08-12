<template>
  <div class="the-previews">
    <h1>{{ previews }}</h1>
    <Shift class="shift">
      <template #button>
        <UIIcon size="128px" class="go-to" src="assets/img/arrow-go.svg" />
      </template>
    </Shift>
  </div>
</template>

<script setup lang="ts">
import UIIcon from '~/components/ui/UIIcon.vue';
import Shift from '~/components/shared/Shift.vue';
import { computed, Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const previews: Ref<string> = computed(() => {
  switch (route.name) {
    case 'index-summary':
      return 'Здесь находится основная информация обо мне, моем опыте работы и образовании';
    case 'index-stack':
      return 'Здесь находятся описание моих профессиональных навыков и личностных качеств. Стек технологий с которыми я сталкивался, и комментарии к ним';
    case 'index-code-examples':
      return 'Здесь находятся небольшие проекты, которые я подготовил для демонстрации моих навыков и код стайла.';
  }
});
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .the-previews {
    display: flex;
    background: white;
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
    background: whitesmoke;
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
    background: whitesmoke;
    padding: 24px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    margin: 0 auto;

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
