<template>
  <div class="the-previews">
    <h1>{{ previews }}</h1>
    <Shift>
      <template #button>
        <UIIcon size="128px" class="go-to" src="assets/img/arrow-go.svg" />
      </template>
    </Shift>
  </div>
</template>

<script setup lang="ts">
import UIIcon from '~/components/ui/UIIcon.vue';
import Shift from '~/components/shared/Shift.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const previews = computed(() => {
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

.the-previews {
  display: flex;
  width: 70%;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);

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
</style>
