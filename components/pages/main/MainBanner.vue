<template>
  <div class="main-banner">
    <div class="text-wrapper">
      <UIText size="2rem" class="row-1">Привет!</UIText>
      <UIText size="2rem" class="row-2">Меня зовут</UIText>
      <UIText size="2rem" class="row-3">Дмитрий Захаров</UIText>
      <br />
      <UIText size="1.1rem" class="row-4">Я - начинающий frontend разработчик</UIText>
      <UIText size="1.1rem" class="row-5" v-if="!isShowed">
        Мой основной язык программирования - JavaScript/TypeScript с фреймворком Vue.js
      </UIText>
    </div>
    <TheAvatar v-if="widthX > 800 || (widthX < 800 && !isShowed)" class="avatar" />
    <TheContacts v-if="widthX < 800 && isShowed" class="contacts" />
  </div>
</template>

<script setup lang="ts">
import TheAvatar from '~/components/pages/main/TheAvatar.vue';
import { computed, Ref } from 'vue';
import UIText from '~/components/ui/UIText.vue';
import { useWindowWidthWatcher } from '~/composables/useWindowWidthWatcher';
import TheContacts from '~/components/pages/main/TheContacts.vue';

const props = defineProps({
  isShowed: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

const width: Ref<string> = computed(() => (props.isShowed ? '70%' : '100%'));
const { widthX } = useWindowWidthWatcher();
</script>
<style scoped lang="scss">
@import '../../../assets/css/constants';

@media (max-width: 800px) {
  .main-banner {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background: #34394d;
    min-width: calc(100% - 24px);
    width: calc(100% - 24px);
    padding: 12px;

    .text-wrapper {
      display: flex;
      flex-direction: column;

      .row-2 {
        font-family: Nunito-ExtraBold, sans-serif;
      }

      .row-3 {
        font-family: Nunito-ExtraBold, sans-serif;
      }

      .row-4,
      .row-5 {
        margin-top: 20px;
        font-family: Nunito-SemiBold, sans-serif;
      }
    }

    .avatar {
      align-self: center;
      margin-top: 20px;
    }

    .contacts {
      align-self: center;
    }
  }
}

@media (min-width: 1700px) {
  .main-banner {
    display: flex;
    justify-content: space-between;
    height: 582px;
    background: #34394d;
    border-radius: 0 0 52px 0;
    min-width: 70%;
    width: v-bind(width);

    .text-wrapper {
      display: flex;
      flex-direction: column;
      margin-left: 300px;
      margin-top: 30px;
      margin-right: 150px;

      h1 {
        color: whitesmoke;
        font-size: 3rem;
      }

      .row-2 {
        color: whitesmoke;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 3rem;
      }

      .row-3 {
        color: whitesmoke;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 3.5rem;
      }

      .row-4,
      .row-5 {
        margin-top: 20px;
        color: whitesmoke;
        font-family: Nunito-SemiBold, sans-serif;
        font-size: 2.8rem;
      }
    }
  }
}
</style>
