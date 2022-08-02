<template>
  <div class="the-top" id="top">
    <p>@zakharovda95</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../../assets/css/constants';

.the-top {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background: $MAIN_BLACK;
  position: fixed;
  z-index: 3;

  p {
    color: whitesmoke;
    font-size: 1.8rem;
    font-family: Nunito-SemiBold, sans-serif;
  }
}
</style>
