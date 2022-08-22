<template>
  <div class="ui-button">
    <div class="icon-left">
      <slot name="icon-left" />
    </div>
    <slot />
    <div class="icon-right">
      <slot name="icon-right" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/css/_constants.scss';
@import '../../assets/css/hoverable.css';

.ui-button {
  cursor: pointer;

  .icon-left,
  .icon-right {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
  }
}
</style>
