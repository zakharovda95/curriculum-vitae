<template>
  <div class="main-banner">
    <h1>Hello!</h1>
    <br>
    <h1>My name is Dmitry Zakharov</h1>
    <p></p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "../../../assets/css/_constants.scss";

.main-banner {
  display: flex;
  width: calc(100% - 60px);
  height: 582px;
  background: black;
  border-radius: 0 0 52px 0;

  h1 {
    color: whitesmoke;
  }
}
</style>