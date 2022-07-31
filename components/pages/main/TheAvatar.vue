<template>
  <div class="the-avatar"/>
</template>

<script setup lang="ts">
defineProps({
  avatar: {
    type: String,
    required: false,
    default: () => 'url("assets/img/avatar.jpg")',
  }
})
</script>

<style scoped lang="scss">
@import "../../../assets/css/constants";

.the-avatar {
  display: flex;
  width: 550px;
  height: calc(100% - 48px);
  align-self: center;
  border-radius: 0 0 32px 0;
  margin-right: 26px;
  background-size: cover;
  background-position: center;
  background-image: v-bind(avatar)

}
</style>