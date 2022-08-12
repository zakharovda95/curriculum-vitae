<template>
  <div class="main-banner">
    <div class="text-wrapper">
      <UIText :size="fontSizes.title" class="row-1">Привет!</UIText>
      <UIText :size="fontSizes.title" class="row-2">Меня зовут</UIText>
      <UIText :size="fontSizes.title" class="row-3">Дмитрий Захаров</UIText>
      <br />
      <UIText :size="fontSizes.content" class="row-4">Я - начинающий frontend разработчик</UIText>
      <UIText :size="fontSizes.content" class="row-5" v-if="!isShowed">
        Мой основной язык программирования - JavaScript/TypeScript с фреймворком Vue.js
      </UIText>
    </div>
    <TheAvatar v-if="widthX > 800 || (widthX <= 800 && !isShowed)" class="avatar" />
    <TheContacts
      v-if="(widthX <= 800 && isShowed) || (widthX > 800 && widthX < 1400)"
      class="contacts"
    />
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

const width: Ref<string> = computed(() => (props.isShowed ? '72%' : '100%'));
const { widthX } = useWindowWidthWatcher();

const fontSizes: Ref<{ [key: string]: string }> = computed(() => {
  if (widthX.value <= 800) {
    return {
      title: '2rem',
      content: '1.1rem',
    };
  }

  if (widthX.value <= 1600) {
    return {
      title: '2.8rem',
      content: '2rem',
    };
  }

  if (widthX.value <= 1799) {
    return {
      title: '3rem',
      content: '2.4rem',
    };
  }
  if (widthX.value > 1800) {
    return {
      title: '3rem',
      content: '2.8rem',
    };
  }
});
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

@media (min-width: 801px) and (max-width: 1399px) {
  .main-banner {
    display: grid;
    grid-template-areas:
      'text text'
      'avatar contacts';
    background: #34394d;
    min-width: calc(100% - 24px);
    width: calc(100% - 24px);
    padding: 12px;

    .text-wrapper {
      display: flex;
      grid-area: text;
      flex-direction: column;
      margin-left: 50px;
      margin-right: 20px;

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
      grid-area: avatar;
      align-self: center;
      justify-self: center;
    }

    .contacts {
      grid-area: contacts;
      align-self: center;
      justify-self: center;
    }
  }
}

@media (min-width: 1400px) {
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
      margin-left: 200px;
      margin-top: 30px;
      margin-right: 100px;

      h1 {
        color: whitesmoke;
      }

      .row-2 {
        color: whitesmoke;
        font-family: Nunito-ExtraBold, sans-serif;
      }

      .row-3 {
        color: whitesmoke;
        font-family: Nunito-ExtraBold, sans-serif;
      }

      .row-4,
      .row-5 {
        margin-top: 20px;
        color: whitesmoke;
        font-family: Nunito-SemiBold, sans-serif;
      }
    }
  }
}
</style>
