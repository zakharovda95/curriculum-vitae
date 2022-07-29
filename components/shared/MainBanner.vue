<template>
  <div class="main-banner">
    <TheAvatar/>
  </div>
</template>

<script setup lang="ts">

import TheAvatar from "~/components/pages/main/TheAvatar.vue";
</script>

<style scoped lang="scss">
@import "../../assets/css/constants";

.main-banner {
  display: flex;
  //width: calc(100% - 40px - 25%);
  justify-content: flex-end;
  width: calc(100% - 40px);
  height: 582px;
  background: #34394D;
  border-radius: 0 0 52px 0;

  h1 {
    color: whitesmoke;
  }
}
</style>