<template>
  <div class="the-header">
    <MainBanner :is-showed="isShowed" class="banner" />
    <TheContacts v-if="widthX > 800" class="contacts" />
    <UIButton v-if="widthX > 800" class="show-contacts" @click="showContacts">
      <template #icon-right>
        <UIIcon src="assets/img/tap.svg" :style="style" />
      </template>
      {{ buttonName }}
    </UIButton>
    <UIButton v-if="widthX <= 800" class="show-contacts-mobile" @click="showContacts">
      <template #icon-right>
        <UIIcon class="icon" src="assets/img/tap.svg" size="48px" />
      </template>
    </UIButton>
  </div>
</template>

<script setup lang="ts">
import MainBanner from '~/components/pages/main/MainBanner.vue';
import UIButton from '~/components/ui/UIButton.vue';
import UIIcon from '~/components/ui/UIIcon.vue';
import { computed, Ref, ref } from 'vue';
import TheContacts from '~/components/pages/main/TheContacts.vue';
import { useWindowWidthWatcher } from '~/composables/useWindowWidthWatcher';

const isShowed: Ref<boolean> = ref(false);

const style: Ref<{ [key: string]: string }> = computed(() => ({
  transform: 'rotate(90deg)',
}));

const buttonName: Ref<string> = computed(() =>
  isShowed.value ? 'Скрыть контакты' : 'Показать контакты',
);

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
    background: $MAIN_AQUAMARINE;
    position: relative;
    z-index: 1;

    .banner {
      position: relative;
      z-index: 2;
    }

    .contacts {
      position: absolute;
      bottom: 30px;
      left: 17vw;
      z-index: 2;
    }

    .show-contacts {
      display: none;
    }

    .show-contacts-mobile {
      position: absolute;
      z-index: 2;
      width: 60px;
      height: 60px;
      background: whitesmoke;
      border: 3px solid $MAIN_AQUAMARINE;
      top: 30px;
      right: 30px;
      border-radius: 35px;

      .icon {
        margin-right: 16px;
        margin-top: 5px;
      }
    }
  }
}

@media (min-width: 1700px) {
  .the-header {
    display: flex;
    width: 100%;
    height: 582px;
    background: $MAIN_AQUAMARINE;
    position: relative;
    z-index: 1;
    margin-top: 60px;

    .banner {
      position: relative;
      z-index: 2;
    }

    .contacts {
      position: absolute;
      top: 180px;
      right: 80px;
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
</style>
