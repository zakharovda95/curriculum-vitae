<template>
  <span class="ui-loading">Загрузка</span>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

.ui-loading {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: $MAIN_WHITE;
  font-family: Nunito-ExtraBold, sans-serif;
  font-size: 2rem;
  background: $MAIN_BLACK;
  overflow: hidden;
}
</style>
