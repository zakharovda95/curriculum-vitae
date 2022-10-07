<template>
  <div class="the-header">
    <MainBanner :is-showed="isShowed" class="banner" />
    <TheContacts v-if="widthX >= 1400" class="contacts" />
    <UIButton v-if="widthX > 800" class="show-contacts" @click="showContacts">
      <template #icon-right>
        <UIIcon :src="CONSTANTS.TAP_URL" :style="style" />
      </template>
      {{ buttonName }}
    </UIButton>
    <UIButton v-if="widthX <= 800" class="show-contacts-mobile" @click="showContacts">
      <template #icon-right>
        <UIIcon class="icon" :src="CONSTANTS.TAP_URL" size="48px" />
      </template>
    </UIButton>
  </div>
</template>

<script setup lang="ts">
import MainBanner from '~/components/pages/main/MainBanner.vue';
import UIButton from '~/components/UI/UIButton.vue';
import UIIcon from '~/components/UI/UIIcon.vue';
import TheContacts from '~/components/pages/main/TheContacts.vue';

import { useWindowWidthWatcher } from '~/composables/useWindowWidthWatcher';

import { useMainStore } from '~/stores/main.store';

import { StyleType } from '~/helpers/types/styles.types';

import { CONSTANTS } from '~/helpers/enums/constants.enum';

import { computed, Ref, ref } from 'vue';

const isShowed: Ref<boolean> = ref(false);

const style: Ref<StyleType> = computed(() => ({
  transform: 'rotate(90deg)',
}));

const mainStore = useMainStore();

const buttonName: Ref<string> = computed(() => {
  if (mainStore.lang === 'rus') {
    return isShowed.value ? 'Скрыть контакты' : 'Показать контакты';
  } else {
    return isShowed.value ? 'Hide contacts' : 'Show contacts';
  }
});

const showContacts = (): void => {
  if (widthX.value < 800) {
    isShowed.value = !isShowed.value;
  }
  if (widthX.value >= 800) {
    isShowed.value = !isShowed.value;
  }
};

const { widthX } = useWindowWidthWatcher();
</script>

<style scoped lang="scss">
@import '../../../assets/css/_constants.scss';

@media (max-width: 800px) {
  .the-header {
    display: flex;
    width: 100%;
    height: calc(100vh - 101px);
    position: relative;
    z-index: 1;
    background: $GRAY;

    .banner {
      position: relative;
      z-index: 2;
    }

    .contacts {
      display: none;
    }

    .show-contacts {
      display: none;
    }

    .show-contacts-mobile {
      position: absolute;
      z-index: 2;
      width: 60px;
      height: 60px;
      background: $WHITE;
      border: 3px solid $GRAY;
      top: 20px;
      right: 20px;
      border-radius: 35px;

      .icon {
        margin-right: 16px;
        margin-top: 5px;
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .the-header {
    display: flex;
    position: relative;
    z-index: 1;
    width: 100%;
    height: calc(100vh - 101px);
    background: $GRAY;

    .banner {
      position: relative;
      z-index: 2;
    }

    .contacts {
      display: none;
    }

    .show-contacts {
      display: none;
    }

    .show-contacts-mobile {
      display: none;
    }
  }
}

@media (min-width: 1400px) and (max-width: 1599px) {
  .the-header {
    display: flex;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 582px;
    background: $GRAY;

    .banner {
      position: relative;
      z-index: 2;
    }

    .contacts {
      position: absolute;
      top: 200px;
      right: 3.2vw;
      z-index: 1;
    }

    .show-contacts {
      position: relative;
      width: 290px;
      display: flex;
      align-items: center;
      transform: rotate(270deg);
      align-self: center;
      font-size: 1.2rem;
      margin: -120px;
      z-index: 2;
    }

    .show-contacts-mobile {
      display: none;
    }
  }
}

@media (min-width: 1600px) {
  .the-header {
    display: flex;
    width: 100%;
    height: 582px;
    background: $GRAY;

    .banner {
      position: relative;
      z-index: 2;
    }

    .contacts {
      position: absolute;
      top: 280px;
      right: 100px;
      z-index: 1;
    }

    .show-contacts {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 2;
      width: 290px;
      transform: rotate(270deg);
      align-self: center;
      font-size: 1.2rem;
      margin: -120px;
    }

    .show-contacts-mobile {
      display: none;
    }
  }
}
</style>
