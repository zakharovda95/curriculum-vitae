<template>
  <div class="content-block">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

.content-block {
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: $MAIN_BLACK;
  padding: 24px;
  border-radius: 0 0 24px 0;
  font-size: 1.2rem;
  font-family: Nunito-SemiBold, sans-serif;
  color: whitesmoke;
  box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.3);

  .header {
    flex-direction: column;
    justify-content: space-around;
    height: 10%;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: baseline;
    height: 80%;
    width: 100%;
  }
}
</style>
