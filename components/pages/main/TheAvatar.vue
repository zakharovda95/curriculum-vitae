<template>
  <div class="the-avatar">
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "../../../assets/css/constants";

.the-avatar {
  display: flex;
  width: 450px;
  height: calc(100% - 48px);
  align-self: center;
  border-radius: 0 0 32px 0;
  margin-right: 26px;
  background-size: cover;
  background-position: center;
  background-image: url("assets/img/avatar.jpg");

}
</style>