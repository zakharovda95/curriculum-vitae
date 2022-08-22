<template>
  <div class="the-top" id="top">
    <p>@zakharovda95</p>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/css/constants';

@media (max-width: 1399px) {
  .the-top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: $MAIN_BLACK;

    p {
      text-align: center;
      color: $MAIN_WHITE;
      font-size: 1.3rem;
      font-family: Nunito-SemiBold, sans-serif;
    }
  }
}

@media (min-width: 1400px) {
  .the-top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: $MAIN_BLACK;

    p {
      color: $MAIN_WHITE;
      font-size: 1.5rem;
      font-family: Nunito-Regular, sans-serif;
    }
  }
}
</style>
