<template>
  <span class="ui-loading">Загрузка</span>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';
.ui-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: fixed;
  z-index: 50;
  width: 100%;
  height: calc(100vh - 60px);
  color: $WHITE;
  font-family: Nunito-ExtraBold, sans-serif;
  font-size: 2rem;
  background: $DARK_BLUE;
  overflow: hidden;
}
</style>
