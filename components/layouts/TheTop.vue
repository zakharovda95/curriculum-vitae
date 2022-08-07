<template>
  <div class="the-top" id="top">
    <p>@zakharovda95</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../../assets/css/constants';

@media (max-width: 800px) {
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
      text-align: center;
      color: whitesmoke;
      font-size: 1.4rem;
      font-family: Nunito-SemiBold, sans-serif;
    }
  }
}

@media (min-width: 1800px) {
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
}
</style>
