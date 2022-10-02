<template>
  <div class="main-banner">
    <div class="text-wrapper">
      <UIText :size="fontSizes.title" class="row-1">{{ bannerText.row1 }}</UIText>
      <UIText :size="fontSizes.title" class="row-2">{{ bannerText.row2 }}</UIText>
      <UIText :size="fontSizes.title" class="row-3">{{ bannerText.row3 }}</UIText>
      <br />
      <UIText :size="fontSizes.content" class="row-4">{{ bannerText.row4 }}</UIText>
      <UIText
        :size="fontSizes.content"
        class="row-5"
        v-if="!isShowed || (widthX > 800 && widthX < 1400)"
      >
        {{ bannerText.row5 }}
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
import UIText from '~/components/UI/UIText.vue';
import TheContacts from '~/components/pages/main/TheContacts.vue';
import TheAvatar from '~/components/pages/main/TheAvatar.vue';

import { useWindowWidthWatcher } from '~/composables/useWindowWidthWatcher';

import { StyleType } from '~/helpers/types/styles.types';

import { computed, Ref } from 'vue';
import { useMainStore } from '~/stores/main.store';
import { BannerType } from '~/helpers/types/content.types';

const props = defineProps({
  isShowed: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

const width: Ref<string> = computed(() => (props.isShowed ? '72%' : '100%'));
const { widthX } = useWindowWidthWatcher();

const fontSizes: Ref<StyleType> = computed(() => {
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

const mainStore = useMainStore();

const bannerText: Ref<BannerType> = computed(() => {
  return mainStore.data.banner;
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
    background: $DARK_BLUE;
    width: calc(100% - 24px);
    height: calc(100vh - 124px);
    overflow: scroll;
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
    background: $DARK_BLUE;
    min-width: calc(100% - 24px);
    width: calc(100% - 24px);
    padding: 12px;
    overflow: scroll;

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
    background: $DARK_BLUE;
    border-radius: 0 0 52px 0;
    min-width: 70%;
    width: v-bind(width);
    overflow: scroll;

    .text-wrapper {
      display: flex;
      flex-direction: column;
      margin-left: 200px;
      margin-top: 30px;
      margin-right: 100px;

      h1 {
        color: $WHITE;
      }

      .row-2 {
        color: $WHITE;
        font-family: Nunito-ExtraBold, sans-serif;
      }

      .row-3 {
        color: $WHITE;
        font-family: Nunito-ExtraBold, sans-serif;
      }

      .row-4,
      .row-5 {
        margin-top: 20px;
        color: $WHITE;
        font-family: Nunito-SemiBold, sans-serif;
      }
    }
  }
}
</style>
