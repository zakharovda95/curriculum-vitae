<template>
  <div class="the-header">
    <MainBanner :is-showed="isShowed" class="banner" />
    <TheContacts class="contacts" />
    <UIButton class="show-contacts" @click="showContacts">
      <template #icon-right>
        <UIIcon src="assets/img/tap.svg" :style="style" />
      </template>
      {{ buttonName }}
    </UIButton>
  </div>
</template>

<script setup lang="ts">
import MainBanner from '~/components/pages/main/MainBanner.vue';
import UIButton from '~/components/ui/UIButton.vue';
import UIIcon from '~/components/ui/UIIcon.vue';
import { computed, Ref, ref } from 'vue';
import TheContacts from '~/components/pages/main/TheContacts.vue';

const isShowed: Ref<boolean> = ref(false);

const style: Ref<{ [key: string]: string }> = computed(() => ({
  transform: 'rotate(90deg)',
}));

const buttonName: Ref<string> = computed(() =>
  isShowed.value ? 'Click to hide contacts' : 'Click to show contacts',
);

const showContacts = (): void => {
  isShowed.value = !isShowed.value;
};
</script>

<style scoped lang="scss">
@import '../../../assets/css/_constants.scss';

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
}
</style>
