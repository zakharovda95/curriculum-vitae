<template>
  <div class="the-contacts">
    <div class="header">Мои контакты:</div>
    <div class="github">
      <UIIcon class="icon" src="assets/img/github.svg" size="56px" />
      <nuxt-link class="link" to="https://github.com/zakharovda95">GitHub</nuxt-link>
    </div>
    <div class="vk">
      <UIIcon class="icon" src="assets/img/vk.svg" size="56px" />
      <nuxt-link class="link" to="https://vk.com/id625689222">VK.com</nuxt-link>
    </div>
    <div class="telegram">
      <UIIcon src="assets/img/telegram.svg" size="48px" />
      <UIText class="text">@zakharovda95</UIText>
    </div>
    <div class="gmail">
      <UIIcon src="assets/img/gmail.svg" size="48px" />
      <UIText class="text">zakharovda95<br />@gmail.com</UIText>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIIcon from '~/components/ui/UIIcon.vue';
import UIText from '~/components/ui/UIText.vue';
</script>

<style scoped lang="scss">
@import '../../../assets/css/constants';
@import '../../../assets/css/hoverable.css';

@media (max-width: 800px) {
  .the-contacts {
    display: flex;
    flex-direction: column;

    .header {
      color: $MAIN_WHITE;
      font-size: 1.2rem;
    }

    .github,
    .vk,
    .telegram,
    .gmail {
      display: flex;
      align-items: center;

      .link,
      .text {
        font-size: 1.2rem;
        text-decoration: none;
        color: $MAIN_WHITE;
        margin-left: 10px;
        margin-top: 10px;
      }
    }

    .icon {
      margin-left: -5px;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .the-contacts {
    display: flex;
    flex-direction: column;

    .header {
      color: $MAIN_WHITE;
      font-size: 1.4rem;
    }

    .github,
    .vk,
    .telegram,
    .gmail {
      display: flex;
      align-items: center;

      .link,
      .text {
        font-size: 1.5rem;
        text-decoration: none;
        color: $MAIN_WHITE;
        margin-left: 10px;
        margin-top: 10px;
      }
    }

    .icon {
      margin-left: -5px;
    }
  }
}

@media (min-width: 1400px) {
  .the-contacts {
    display: flex;
    flex-direction: column;

    .github,
    .vk,
    .telegram,
    .gmail {
      display: flex;
      align-items: center;

      .link,
      .text {
        padding: 5px;
        font-size: 1.8rem;
        text-decoration: none;
        color: $MAIN_BLACK;
        margin-left: 10px;
        margin-top: 10px;
      }
    }

    .icon {
      margin-left: -5px;
    }
  }
} ;
</style>
