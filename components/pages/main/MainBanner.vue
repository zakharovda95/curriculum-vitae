<template>
  <div class="main-banner">
    <div class="text-wrapper">
      <h1 class="row-1">Привет!</h1>
      <p class="row-2">Меня зовут</p>
      <p class="row-3">Дмитрий Захаров</p>
      <br />
      <p class="row-4">Я - начинающий frontend разработчик</p>
      <p class="row-5" v-if="!isShowed">
        Мой основной язык программирования - JavaScript/TypeScript с фреймворком Vue.js
      </p>
    </div>
    <TheAvatar />
  </div>
</template>

<script setup lang="ts">
import TheAvatar from '~/components/pages/main/TheAvatar.vue';
import { computed, Ref } from 'vue';

const props = defineProps({
  isShowed: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

const width: Ref<string> = computed(() => (props.isShowed ? '70%' : '100%'));
</script>
<style scoped lang="scss">
@import '../../../assets/css/constants';

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
</style>
